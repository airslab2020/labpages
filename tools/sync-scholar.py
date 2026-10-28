"""Refresh public Scholar metrics atomically; never replace good data on failure."""
import argparse
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.parse import parse_qs, urlparse
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
USER = "LKPpmXQAAAAJ"
URL = f"https://scholar.google.com/citations?user={USER}&hl=en"
PREFIX = "window.ScholarMetricsData = "


class Element:
    def __init__(self, tag="", attrs=()):
        self.tag = tag
        self.attrs = dict(attrs)
        self.children = []

    def text(self):
        return "".join(child.text() if isinstance(child, Element) else child for child in self.children)

    def find(self, *, tag=None, id=None, cls=None):
        found = []
        for child in self.children:
            if not isinstance(child, Element):
                continue
            if ((tag is None or child.tag == tag)
                    and (id is None or child.attrs.get("id") == id)
                    and (cls is None or cls in child.attrs.get("class", "").split())):
                found.append(child)
            found.extend(child.find(tag=tag, id=id, cls=cls))
        return found


class ScholarHTML(HTMLParser):
    VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Element()
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        element = Element(tag, attrs)
        self.stack[-1].children.append(element)
        if tag not in self.VOID:
            self.stack.append(element)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                break

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def number(value):
    value = value.strip().replace(",", "").replace("\u00a0", "").replace("\u202f", "")
    if not re.fullmatch(r"[0-9]+", value):
        raise ValueError("Missing or invalid Scholar count")
    result = int(value)
    if result > 100_000_000:
        raise ValueError("Unexpected Scholar count")
    return result


def parse_profile(raw, now=None):
    parser = ScholarHTML()
    parser.feed(raw)
    root = parser.root
    names = root.find(id="gsc_prf_in")
    if len(names) != 1 or not re.search(r"\bfei\s+wang\b", names[0].text(), re.I):
        raise ValueError("Unexpected Scholar profile or access challenge")
    tables = root.find(id="gsc_rsb_st")
    if len(tables) != 1:
        raise ValueError("Scholar citation table missing")
    table = tables[0]
    labels = table.find(tag="th")
    if len(labels) < 3 or labels[-2].text().strip() != "All":
        raise ValueError("Unexpected citation table columns")
    recent = " ".join(labels[-1].text().split())
    if not re.fullmatch(r"Since 20[0-9]{2}", recent):
        raise ValueError("Unexpected recent citation window")
    metric_keys = {"Citations": "citations", "h-index": "hIndex", "i10-index": "i10Index"}
    metrics = {}
    for row in table.find(tag="tr"):
        cells = row.find(tag="td")
        if len(cells) != 3:
            continue
        label = cells[0].text().strip()
        if label in metric_keys:
            key = metric_keys[label]
            if key in metrics:
                raise ValueError("Duplicate metric")
            metrics[key] = {"all": number(cells[1].text()), "recent": number(cells[2].text())}
    if set(metrics) != set(metric_keys.values()):
        raise ValueError("Incomplete Scholar metrics")
    for metric in metrics.values():
        if metric["recent"] > metric["all"]:
            raise ValueError("Recent count exceeds lifetime count")
    if any(metrics[key]["all"] > metrics["citations"]["all"] for key in ("hIndex", "i10Index")):
        raise ValueError("Inconsistent indices")

    years = [number(el.text()) for el in root.find(cls="gsc_g_t")]
    bars = root.find(cls="gsc_g_a")
    if not years or len(years) != len(bars) or years != sorted(set(years)):
        raise ValueError("Incomplete annual citation chart")
    annual = []
    now = now or datetime.now(timezone.utc)
    for year, bar in zip(years, bars):
        if not 1900 <= year <= now.year + 1:
            raise ValueError("Invalid chart year")
        href = bar.attrs.get("href", "")
        query = parse_qs(urlparse(href).query)
        if (("user" in query and query["user"] != [USER])
                or ("as_ylo" in query and query["as_ylo"] != [str(year)])):
            raise ValueError("Chart bar belongs to another profile or year")
        counts = bar.find(cls="gsc_g_al")
        if len(counts) != 1:
            raise ValueError("Annual count missing")
        annual.append({"year": year, "citations": number(counts[0].text())})
    if sum(row["citations"] for row in annual) > metrics["citations"]["all"]:
        raise ValueError("Annual counts exceed lifetime citations")
    return {"version": 1, "userId": USER, "name": "Fei Wang", "sourceUrl": URL,
            "updatedAt": now.isoformat(), "provenance": "google-scholar",
            "recentLabel": recent, "metrics": metrics, "annualCitations": annual}


def fetch_profile():
    request = Request(URL, headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "en-US,en;q=0.9"})
    with urlopen(request, timeout=30) as response:
        final = urlparse(response.url)
        if (final.hostname != "scholar.google.com" or final.path != "/citations"
                or parse_qs(final.query).get("user") != [USER]):
            raise ValueError("Scholar redirected to an unexpected page")
        raw = response.read(2_000_001)
    if len(raw) > 2_000_000:
        raise ValueError("Scholar response exceeds size limit")
    return raw.decode("utf-8")


def write_snapshot(path, data):
    payload = json.dumps(data, ensure_ascii=True, indent=2).replace("<", "\\u003c")
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(".tmp")
    temporary.write_text(PREFIX + payload + ";\n", encoding="utf-8")
    temporary.replace(path)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", type=Path, help="Saved Scholar HTML for offline verification")
    parser.add_argument("--output", type=Path, default=ROOT / "assets/js/data/scholar-metrics.js")
    args = parser.parse_args()
    try:
        raw = args.input.read_text(encoding="utf-8") if args.input else fetch_profile()
        data = parse_profile(raw)
        write_snapshot(args.output, data)
    except Exception as error:
        print(f"Scholar refresh failed; existing snapshot preserved: {type(error).__name__}: {error}", file=sys.stderr)
        return 1
    print(f"Updated Scholar metrics: {data['metrics']['citations']['all']} citations at {data['updatedAt']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

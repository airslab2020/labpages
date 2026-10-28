"""Offline contract tests; fixture counts are synthetic, not published metrics."""
from datetime import datetime, timezone
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch


sys.dont_write_bytecode = True
SPEC = importlib.util.spec_from_file_location("sync_scholar", Path(__file__).with_name("sync-scholar.py"))
scholar = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(scholar)
NOW = datetime(2026, 10, 28, 0, 0, tzinfo=timezone.utc)
FIXTURE = """<!doctype html><html><head><meta charset="utf-8"></head><body>
<div id="gsc_prf_in">Fei Wang</div>
<table id="gsc_rsb_st"><thead><tr><th></th><th>All</th><th>Since 2021</th></tr></thead>
<tbody>
<tr><td><a>Citations</a></td><td class="gsc_rsb_std">1,234</td><td>1,200</td></tr>
<tr><td>h-index</td><td>20</td><td>19</td></tr>
<tr><td>i10-index</td><td>30</td><td>29</td></tr>
</tbody></table>
<div id="gsc_rsb_cit"><span class="gsc_g_t">2025</span><span class="gsc_g_t">2026</span>
<a class="gsc_g_a" href="javascript:void(0)"><span class="gsc_g_al">400</span></a>
<a class="gsc_g_a" href="/citations?user=LKPpmXQAAAAJ&amp;as_ylo=2026"><span class="gsc_g_al">500</span></a>
</div></body></html>"""


class ScholarTests(unittest.TestCase):
    def test_metrics_and_chart(self):
        data = scholar.parse_profile(FIXTURE, NOW)
        self.assertEqual(data["metrics"]["citations"], {"all": 1234, "recent": 1200})
        self.assertEqual(data["metrics"]["hIndex"], {"all": 20, "recent": 19})
        self.assertEqual(data["metrics"]["i10Index"], {"all": 30, "recent": 29})
        self.assertEqual(data["annualCitations"], [{"year": 2025, "citations": 400}, {"year": 2026, "citations": 500}])
        self.assertEqual(data["updatedAt"], NOW.isoformat())
        self.assertEqual(data["provenance"], "google-scholar")

    def test_recent_window_is_not_hardcoded(self):
        self.assertEqual(scholar.parse_profile(FIXTURE.replace("Since 2021", "Since 2022"), NOW)["recentLabel"], "Since 2022")

    def test_bilingual_name(self):
        self.assertEqual(scholar.parse_profile(FIXTURE.replace("Fei Wang", "Fei Wang (\u738b\u98de)"), NOW)["name"], "Fei Wang")

    def test_invalid_responses_rejected(self):
        cases = {
            "challenge": "<html><body>Sorry, unusual traffic. CAPTCHA.</body></html>",
            "wrong name": FIXTURE.replace("Fei Wang", "Other Person"),
            "missing index": FIXTURE.replace("i10-index", "missing-index"),
            "duplicate index": FIXTURE.replace("i10-index", "h-index"),
            "invalid count": FIXTURE.replace("1,234", "-1"),
            "empty count": FIXTURE.replace("1,234", ""),
            "recent exceeds all": FIXTURE.replace("1,200", "1,300"),
            "invalid columns": FIXTURE.replace("Since 2021", "Unknown"),
            "missing chart": FIXTURE.replace('class="gsc_g_t"', 'class="missing"'),
            "wrong chart user": FIXTURE.replace("user=LKPpmXQAAAAJ", "user=another"),
            "wrong chart year": FIXTURE.replace("as_ylo=2026", "as_ylo=2024"),
            "duplicate year": FIXTURE.replace('>2025<', '>2026<'),
            "annual exceeds all": FIXTURE.replace('>500<', '>1000<'),
            "missing bar": FIXTURE.replace('class="gsc_g_a"', 'class="missing"'),
        }
        for label, raw in cases.items():
            with self.subTest(label=label), self.assertRaises(ValueError):
                scholar.parse_profile(raw, NOW)

    def test_atomic_output_and_json_roundtrip(self):
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder) / "scholar.js"
            data = scholar.parse_profile(FIXTURE, NOW)
            scholar.write_snapshot(output, data)
            text = output.read_text()
            self.assertTrue(text.startswith(scholar.PREFIX))
            self.assertEqual(json.loads(text[len(scholar.PREFIX):].strip().removesuffix(";")), data)
            self.assertFalse(output.with_suffix(".tmp").exists())

    def test_failed_parse_preserves_existing_bytes(self):
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder) / "scholar.js"
            output.write_bytes(b"last successful snapshot\n")
            invalid = Path(folder) / "blocked.html"
            invalid.write_text("<h1>Access denied</h1>")
            result = subprocess.run([sys.executable, str(Path(scholar.__file__)), "--input", str(invalid), "--output", str(output)], capture_output=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual(output.read_bytes(), b"last successful snapshot\n")

    def test_network_failure_preserves_existing_bytes(self):
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder) / "scholar.js"
            output.write_bytes(b"last successful snapshot\n")
            with patch.object(sys, "argv", ["sync-scholar.py", "--output", str(output)]), patch.object(scholar, "fetch_profile", side_effect=TimeoutError("offline")):
                self.assertEqual(scholar.main(), 1)
            self.assertEqual(output.read_bytes(), b"last successful snapshot\n")

    def test_published_seed_is_honest_about_provenance(self):
        text = (scholar.ROOT / "assets/js/data/scholar-metrics.js").read_text()
        data = json.loads(text[len(scholar.PREFIX):].strip().removesuffix(";"))
        if data["provenance"] == "user-screenshot":
            self.assertIsNone(data["updatedAt"])
            self.assertEqual(data["annualCitations"], [])
            self.assertEqual(data["metrics"]["citations"]["all"], 2693)
            self.assertTrue((scholar.ROOT / data["snapshotImage"].removeprefix("./")).is_file())


if __name__ == "__main__":
    unittest.main()

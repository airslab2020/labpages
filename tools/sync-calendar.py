"""Publish only titles and times from the dedicated public office calendar."""
import argparse
from datetime import datetime, timedelta, timezone
import hashlib
import json
from pathlib import Path
import subprocess
from zoneinfo import ZoneInfo

from icalendar import Calendar
import recurring_ical_events

URL = "https://p236-caldav.icloud.com.cn/published/2/MTAwODkxMDQ4MjYxMDA4OWFFg1snSWH21Vd09qrbZZSshmcUFlZ7XWEHEw6moJG8MS8lw75Sdag9kbTGsBv7p8wc6qpuDVHuqhK7A6eOnpw"
NAME = "Fei Wang · Office Schedule"
ZONE = ZoneInfo("Asia/Shanghai")


def convert(raw, now=None):
    now = now or datetime.now(timezone.utc)
    calendar = Calendar.from_ical(raw)
    if calendar.name != "VCALENDAR" or str(calendar.get("X-WR-CALNAME", "")) != NAME:
        raise ValueError("Unexpected calendar; refusing to publish")
    start = now.astimezone(ZONE).date() - timedelta(days=60)
    end = now.astimezone(ZONE).date() + timedelta(days=366)
    events = []
    for event in recurring_ical_events.of(calendar).between(start, end):
        if str(event.get("STATUS", "")).upper() == "CANCELLED":
            continue
        begin = event.decoded("DTSTART")
        all_day = not isinstance(begin, datetime)
        finish = event.decoded("DTEND", None)
        if finish is None:
            finish = begin + event.decoded("DURATION", timedelta(days=1) if all_day else timedelta())
        def stamp(value):
            if isinstance(value, datetime):
                value = value.replace(tzinfo=ZONE) if value.tzinfo is None else value
                return value.astimezone(ZONE).isoformat(timespec="seconds")
            return value.isoformat()
        title = str(event.get("SUMMARY", "Busy"))[:500]
        if str(event.get("CLASS", "PUBLIC")).upper() in {"PRIVATE", "CONFIDENTIAL"}:
            title = "Busy"
        events.append({
            "id": hashlib.sha256((str(event.get("UID", "")) + stamp(begin)).encode()).hexdigest()[:20],
            "title": title, "start": stamp(begin), "end": stamp(finish), "allDay": all_day,
            "kind": "available" if title.strip().lower().startswith(("office hours", "可预约")) else "busy",
        })
        if len(events) > 10000:
            raise ValueError("Too many events")
    return {"version": 1, "updatedAt": now.isoformat(), "rangeStart": start.isoformat(),
            "rangeEnd": end.isoformat(), "events": sorted(events, key=lambda e: (e["start"], e["id"]))}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, help="Local ICS for verification")
    parser.add_argument("--output", type=Path, default=Path("assets/js/data/calendar-events.js"))
    args = parser.parse_args()
    if args.input:
        raw = args.input.read_bytes()
    else:
        raw = subprocess.run(["curl", "--fail", "--silent", "--show-error", "--location",
                              "--proto", "=https", "--max-time", "45", "--retry", "2",
                              "--max-filesize", "5000000", URL], check=True, capture_output=True).stdout
    if len(raw) > 5_000_000:
        raise ValueError("Calendar exceeds size limit")
    data = convert(raw)
    payload = json.dumps(data, ensure_ascii=True, indent=2).replace("<", "\\u003c")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    temporary = args.output.with_suffix(".tmp")
    temporary.write_text("window.OfficeCalendarData = " + payload + ";\n", encoding="utf-8")
    temporary.replace(args.output)
    print(f"Published {len(data['events'])} events; updated {data['updatedAt']}")


if __name__ == "__main__":
    main()

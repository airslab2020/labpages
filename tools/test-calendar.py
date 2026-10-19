import importlib.util
from datetime import datetime, timezone
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location("sync_calendar", Path(__file__).with_name("sync-calendar.py"))
sync = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sync)


class CalendarTests(unittest.TestCase):
    def convert(self, events=""):
        raw = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nX-WR-CALNAME:" + sync.NAME + "\r\n" + events + "END:VCALENDAR\r\n"
        return sync.convert(raw.encode(), datetime(2026, 10, 20, tzinfo=timezone.utc))

    def test_empty(self):
        self.assertEqual(self.convert()["events"], [])

    def test_recurrence_timezone_privacy(self):
        data = self.convert("BEGIN:VEVENT\r\nUID:secret-id\r\nDTSTART:20261020T010000Z\r\nDTEND:20261020T020000Z\r\nRRULE:FREQ=DAILY;COUNT=3\r\nEXDATE:20261021T010000Z\r\nSUMMARY:Office Hours\r\nDESCRIPTION:secret note\r\nLOCATION:secret room\r\nEND:VEVENT\r\n")
        self.assertEqual(len(data["events"]), 2)
        self.assertEqual(data["events"][0]["start"], "2026-10-20T09:00:00+08:00")
        self.assertEqual(data["events"][0]["kind"], "available")
        self.assertNotIn("secret", str(data))

    def test_private_all_day(self):
        event = self.convert("BEGIN:VEVENT\r\nUID:1\r\nDTSTART;VALUE=DATE:20261020\r\nDTEND;VALUE=DATE:20261022\r\nSUMMARY:Private title\r\nCLASS:PRIVATE\r\nEND:VEVENT\r\n")["events"][0]
        self.assertEqual(event["title"], "Busy")
        self.assertTrue(event["allDay"])
        self.assertEqual(event["end"], "2026-10-22")

    def test_reject_wrong_calendar(self):
        with self.assertRaises(ValueError):
            sync.convert(b"BEGIN:VCALENDAR\r\nVERSION:2.0\r\nX-WR-CALNAME:Personal\r\nEND:VCALENDAR\r\n")


if __name__ == "__main__":
    unittest.main()

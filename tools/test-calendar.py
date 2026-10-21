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

    def test_thesis_schedule_changes_at_new_year(self):
        data = sync.convert(sync.SUPPLEMENT.read_bytes(), datetime(2026, 10, 21, tzinfo=timezone.utc))
        thesis = [e for e in data["events"] if e["title"] == "研三大论文进度汇报"]
        dates_2026 = [e["start"][:10] for e in thesis if e["start"].startswith("2026")]
        self.assertEqual(dates_2026, ["2026-10-31", "2026-11-14", "2026-11-28", "2026-12-12", "2026-12-26"])
        dates_january = [e["start"][:10] for e in thesis if e["start"].startswith("2027-01")]
        self.assertEqual(dates_january, ["2027-01-02", "2027-01-09", "2027-01-16", "2027-01-23", "2027-01-30"])
        dates_2027 = [e["start"][:10] for e in thesis if e["start"].startswith("2027")]
        self.assertEqual(len(dates_2027), 13)
        self.assertEqual(dates_2027[-1], "2027-03-27")
        self.assertFalse(any(day >= "2027-04-01" for day in dates_2027))
        for event in thesis:
            self.assertTrue(event["start"].endswith("T20:00:00+08:00"))
            self.assertTrue(event["end"].endswith("T21:00:00+08:00"))
        meetings = [e for e in data["events"] if e["title"] == "科研组会"]
        self.assertEqual([e["start"] for e in meetings], ["2026-10-29T16:00:00+08:00", "2026-11-05T16:00:00+08:00"])
        self.assertTrue(all(e["end"].endswith("T18:00:00+08:00") for e in meetings))


if __name__ == "__main__":
    unittest.main()

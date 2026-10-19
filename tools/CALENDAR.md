# Office calendar

Only `Fei Wang · Office Schedule` is published. Maintain events in that calendar
in Apple Calendar or iCloud. Do not put private information in this public calendar.
Titles beginning with `Office Hours` or `可预约` indicate possible meeting times;
overlapping busy events disable booking requests. Empty time is not availability.
Requests are confirmed manually by email or WeChat.

Usual meeting hours are 10:00–21:00 Beijing time, subject to confirmation.
The October 20 TMC response and October 23–25 Shenzhen conference are website
announcements in `assets/js/calendar.js`, merged with the iCloud snapshot. They
are not written back to iCloud and are not overwritten by synchronization.

The website publishes titles and Beijing times only. Private/confidential events
are labeled Busy. Notes, locations and attendees are never exported to the site.
The underlying iCloud feed is public: do not add sensitive details to it.

Install `tools/calendar-requirements.txt`, then run `python tools/sync-calendar.py`.
The script expands recurring events from 60 days ago to 366 days ahead. Failed
fetches do not replace the existing snapshot. A snapshot older than six hours
displays a warning.

Deployment: in GitHub Settings > Pages choose **GitHub Actions** as the source.
The Website and office calendar workflow deploys on pushes and approximately
every 30 minutes. GitHub scheduled runs may be delayed. A failed synchronization
fails deployment and preserves the last live site. No commit is made by sync.

FullCalendar 6.1.19 is vendored from the official fullcalendar npm package;
its MIT license is in assets/vendor/fullcalendar/LICENSE.md.

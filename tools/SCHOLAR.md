# Google Scholar metrics

The Fei Wang profile loads `assets/js/data/scholar-metrics.js` as a static snapshot.
There is no visitor-side Google request, cookie, API key, or third-party widget.
The initial three metrics are transcribed from the screenshot supplied on
2026-10-28. The original screenshot supplies the chart until a successful live
refresh; yearly counts have not been estimated from bar heights. The original
image is retained unchanged; CSS displays only its chart region.

## Daily Refresh

`.github/workflows/scholar-metrics.yml` runs at **03:23 Asia/Shanghai** every day
(`23 19 * * *` UTC), or manually via **Actions > Scholar metrics > Run workflow**.
GitHub scheduled jobs may be delayed; this is not an exact-time guarantee.
The workflow must be pushed to the repository's default `master` branch before
it becomes active. GitHub may disable schedules after prolonged inactivity in
a public repository; re-enable the workflow in Actions when needed.

The job runs offline tests, fetches the public English Scholar profile, validates
the name, all three metrics, recent-period label, and year/count series, then
atomically writes and commits only the snapshot. It needs repository contents
write permission. It does not update the curated publication list.

The existing website/calendar workflow listens for a successful **Scholar metrics**
`workflow_run` and checks out the latest `master`, then deploys the new snapshot.
This explicit trigger is needed because commits made using `GITHUB_TOKEN` do
not trigger ordinary push workflows. Calendar's existing half-hour schedule
and data-generation steps are unchanged. Later calendar deployments include
the committed Scholar snapshot, so they do not revert citation metrics.

## Failure Policy

Google Scholar may deny automated requests or return a challenge. No CAPTCHA,
login, proxy rotation, or access-control bypass is attempted. Failed requests,
invalid/incomplete responses, and parse errors exit nonzero before writing.
The existing snapshot and its last-successful timestamp are retained; the
Actions run is marked failed instead of silently claiming a refresh. The page
indicates when its last successful snapshot is more than 72 hours old. Seed
provenance remains recorded in the data file and image alternative text. The
public page omits screenshot/pending labels and does not show a last-sync
timestamp until a real refresh succeeds.

An unauthenticated public fetch cannot guarantee daily success. If GitHub's
runner is persistently blocked, review its failed run before changing the
source or adopting an authorized data service.

## Local Verification

```sh
python3 tools/test-scholar.py
python3 tools/sync-scholar.py
python3 tools/sync-scholar.py --input /tmp/scholar-profile.html --output /tmp/scholar-metrics.js
```

The offline test counts are synthetic and never replace the published snapshot.
Open `fei-wang.html#citations` locally to preview; the snapshot works with both
`file://` and HTTP(S). After enabling the workflow, confirm an actual successful
refresh and subsequent Pages deployment in Actions before calling it live.

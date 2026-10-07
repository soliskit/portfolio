# Portfolio behavior tests

These Chromium tests cover page loading and local assets, section navigation and the public email link, and light/dark theme selection and persistence. They do not compare resume wording, check external services, send email, or use visual snapshots.

Run against a production build:

```sh
npm ci
npx playwright install --with-deps chromium
npm run build
npm test
```

Playwright starts and stops the production server on `127.0.0.1:3000`. That port must be free. One worker runs with no automatic retries. Failure traces and screenshots are saved under `test-results/` and ignored by Git.

No workflow is added or changed here. The build-only workflow in PR #41 does not run these tests. Running them in GitHub Actions needs a separate workflow change: install Chromium, build once, then run `npm test`.

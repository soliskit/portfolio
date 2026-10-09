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

GitHub Actions runs these tests on every build. The Build workflow installs Chromium, builds the site once, then runs `npm test`.

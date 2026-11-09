const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4000',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'python3 -m http.server 4000 --bind 127.0.0.1 --directory out',
    url: 'http://127.0.0.1:4000',
    reuseExistingServer: false,
    timeout: 60000
  }
})

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  retries: 1,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'http://localhost:8100',

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure'
  },

  webServer: {
    command: 'ionic serve --no-open',
    url: 'http://localhost:8100',
    reuseExistingServer: true,
    timeout: 120000
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'iphone',
      use: {
        ...devices['iPhone 14']
      }
    }
  ]
});
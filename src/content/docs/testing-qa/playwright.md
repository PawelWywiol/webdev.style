---
title: Playwright Testing
description: Set up Playwright for end-to-end testing, including configuration, test scripts, and best practices.
category: Testing, QA
---

# Playwright

## Installation

```bash
npx init playwright@latest
```

## Create `playwright.config.ts`

```ts
import { devices } from '@playwright/test';

import type { PlaywrightTestConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export const baseConfig: PlaywrightTestConfig = {
  testDir: './src/e2e',
  /* Maximum time one test can run for. */
  timeout: process.env['CI'] ? 60 * 1000 : 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30 * 1000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env['CI'],
  /* Retry on CI only */
  retries: process.env['CI'] ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  ...(process.env['CI'] ? { workers: 1 } : {}),
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env['CI']
    ? [['json', { outputFile: 'results.json' }]]
    : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://webdev.style',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Desktop Chrome FullHD',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Desktop Firefox FullHD',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Desktop Safari FullHD',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
};
```

## Create `src/e2e/example.spec.ts`

```ts
import { test, expect } from '@playwright/test';

export const baseUrl = 'https://webdev.style';

test.describe('Example Test Suite', () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page).toHaveTitle(/WebDev Style/);
  });

  test('should display the main heading', async ({ page }) => {
    await page.goto(baseUrl);
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Welcome to WebDev Style!');
  });
});
```

## Add test script to `package.json`

```json
{
  "scripts": {
    "test:e2e": "playwright test --config=playwright.config.ts"
  }
}
```

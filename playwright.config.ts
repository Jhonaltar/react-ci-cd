
// import { defineConfig, devices } from '@playwright/test';

// declare const process: { env: Record<string, string | undefined> };

// const isCI = ['1', 'true'].includes((process.env.CI ?? '').toLowerCase());

// export default defineConfig({
//   testDir: './e2e/playwright',

//   fullyParallel: true,

//   forbidOnly: isCI,

//   retries: isCI ? 2 : 0,

//   reporter: 'html',

//   use: {
//     baseURL: 'http://127.0.0.1:5173',
//     trace: 'on-first-retry',
//   },

//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//   ],

//   webServer: {
//     command: 'npm run dev -- --host 127.0.0.1',
//     url: 'http://127.0.0.1:5173',
//     reuseExistingServer: !isCI,
//     timeout: 30_000,
//   },
// });




import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/playwright',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  reporter: 'html',

  use: {
    baseURL: 'http://127.0.0.1:5173',
    //trace: 'on-first-retry',
    trace: 'retain-on-failure',

    screenshot: 'only-on-failure',

    video: 'off',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run dev -- --host 127.0.0.1',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});

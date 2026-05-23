// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config= defineConfig({
  testDir: './tests', //specify the test directory
  timeout: 40 * 1000, //timeout per test
  expect: {
    timeout: 5000 //timeout for expect assertions
  },
  reporter: 'html',
  use: {
    browserName: 'webkit', //set default browser to WebKit
    headless: false, //run tests in headless mode now
  },
});

module.exports = config; //export the config object to allow Playwright to use it
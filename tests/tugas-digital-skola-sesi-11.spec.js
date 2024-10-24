const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pagesFixture');
const env = process.env;

test('Visual comparison of login page', async ({ loginPage }) => {
  await loginPage.navigate();
  await loginPage.page.waitForLoadState('networkidle');
  expect(await loginPage.page.screenshot()).toMatchSnapshot(env.LOGIN_SCREENSHOT_PATH, { maxDiffPixels: 100 });
});

test('Visual comparison of dashboard page', async ({ loginPage, dashboardPage }) => {
  await loginPage.navigate();
  await loginPage.login(env.USERNAME, env.PASSWORD);
  await dashboardPage.page.waitForLoadState('networkidle');
  expect(await dashboardPage.page.screenshot()).toMatchSnapshot(env.DASHBOARD_SCREENSHOT_PATH, { maxDiffPixels: 100 });
});

test('Visual comparison of cart page', async ({ loginPage, dashboardPage, cartPage }) => {
  await loginPage.navigate();
  await loginPage.login(env.USERNAME, env.PASSWORD);
  await dashboardPage.addItemToCart('Sauce Labs Backpack');
  await dashboardPage.goToCart();
  await cartPage.page.waitForLoadState('networkidle');
  expect(await cartPage.page.screenshot()).toMatchSnapshot(env.CART_SCREENSHOT_PATH, { maxDiffPixels: 100 });
});
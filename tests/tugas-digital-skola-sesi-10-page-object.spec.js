const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pagesFixture');

test('User can login, add item to cart, and validate the cart', async ({
  loginPage,
  dashboardPage,
  cartPage,
}) => {
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  expect(await dashboardPage.isAtDashboard()).toBeTruthy();

  await dashboardPage.addItemToCart('Sauce Labs Backpack');

  await dashboardPage.goToCart();
  expect(await cartPage.isItemInCart('Sauce Labs Backpack')).toBeTruthy();
});
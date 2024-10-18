import { test, expect } from '@playwright/test';

test('tugas-digital-skola-sesi-9', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click({force: true});
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click({force: true});
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click({force: true});
  await expect(page.locator('[data-test="primary-header"] div').filter({ hasText: 'Swag Labs' }).first()).toBeVisible();
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
  await expect(page.locator('[data-test="footer"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click({force: true});
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');
  await page.locator('[data-test="shopping-cart-link"]').click({force: true});
  await expect(page.locator('[data-test="inventory-item"]')).toBeVisible();
});
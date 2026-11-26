import { test, expect, Page } from '@playwright/test';
import { InventoryPage } from '../pages/inventorypage';
import { CartPage } from '../pages/cartpage';

async function login(page: Page) {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');
}

// TC-04 Product Sorting
test('TC-04 Product Sorting', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await login(page);

  await inventory.sortHighToLow();

  const prices = await page
    .locator('.inventory_item_price')
    .allTextContents();

  const numericPrices = prices.map(price =>
    Number(price.replace('$', ''))
  );

  for (let i = 0; i < numericPrices.length - 1; i++) {
    expect(numericPrices[i]).toBeGreaterThanOrEqual(
      numericPrices[i + 1]
    );
  }
});

// TC-05 Add Product to Cart
test('TC-05 Add Product to Cart', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await login(page);

  await inventory.addBackpackToCart();

  await expect(
    page.locator(inventory.cartBadge)
  ).toHaveText('1');
});

// TC-06 Remove Product from Cart
test('TC-06 Remove Product from Cart', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login(page);

  await inventory.addBackpackToCart();

  await inventory.openCart();

  await cart.removeBackpack();

  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveCount(0);
});
import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/inventorypage';
import { CartPage } from '../pages/cartpage';
import { CheckoutPage } from '../pages/CheckoutPage';

import { checkoutData } from '../test-data/checkoutData';
import { users } from '../test-data/users';


// TC-07 Check-out process completed successfully
test('TC-07 Successful-checkout-process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.startCheckout();

    await checkoutPage.fillCheckoutInformation(
        checkoutData.validCheckout.firstName,
        checkoutData.validCheckout.lastName,
        checkoutData.validCheckout.postalCode
    )
    await checkoutPage.continueCheckout();
    await checkoutPage.finishCheckout();

    await expect(page.locator('.complete-header'))
    .toContainText('Thank you for your order!');

});

// TC-08 Unsuccessful Checkout with missing required information 
test('TC-08 Unsuccessful-checkout-process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.startCheckout();

    await checkoutPage.fillCheckoutInformation(
        checkoutData.invalidCheckoutInfo.firstName,
        checkoutData.invalidCheckoutInfo.lastName,
        checkoutData.invalidCheckoutInfo.postalCode
    );
    await checkoutPage.continueCheckout();

    await expect(
        page.locator(checkoutPage.errorMessage))
    .toBeVisible();
});


// TC-10 Successful Logout
test('TC-10 Logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);


    await loginPage.navigate();
    await loginPage.login(
        users.standard.username,
        users.standard.password
    );

    await page.click('#react-burger-menu-btn');
    await page.click('[data-test="logout-sidebar-link"]');

    await expect(
        page.locator(loginPage.loginButton))
    .toBeVisible();
});

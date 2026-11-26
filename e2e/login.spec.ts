import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test('TC-01 Successful Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    users.standard.username,
    users.standard.password
  );

  await expect(page).toHaveURL(/inventory/);
});

test('TC-02 Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    users.invalid.username,
    users.invalid.password
  );

  await expect(
    page.locator(loginPage.errorMessage)
  ).toBeVisible();
});
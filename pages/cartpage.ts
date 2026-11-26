import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeBackpack() {
    await this.page.click(
      '#remove-sauce-labs-backpack'
    );
  }

  async startCheckout() {
    await this.page.click('#checkout');
  }
}
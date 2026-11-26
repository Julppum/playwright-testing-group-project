import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async sortHighToLow() {
    await this.page.selectOption(
      '.product_sort_container',
      'hilo'
    );
  }

  async addBackpackToCart() {
    await this.page.click(
      '#add-to-cart-sauce-labs-backpack'
    );
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  cartBadge = '.shopping_cart_badge';
}
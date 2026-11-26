import { Page } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {}

    firstNameInput = '#first-name';
    lastNameInput = '#last-name';
    postalCodeInput = '#postal-code';

    continueButton = '#continue';
    finishButton = '#finish';

    errorMessage = '[data-test="error"]';

    async fillCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.postalCodeInput, postalCode);
    }

    async continueCheckout() {
        await this.page.click(this.continueButton);
    }

    async finishCheckout() {
        await this.page.click(this.finishButton);
    }
}
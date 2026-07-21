import { expect, Page } from '@playwright/test';

export class WelcomePage {

    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('/');
    }

    async startRadio() {

      console.error(this.page.locator('.btn-start'));
      debugger;
        await this.page.locator('.btn-start').click();
    }

    async startCommon() {
        await this.page.locator('.btn-common').click();
    }

    async startMixed() {
        await this.page.locator('.btn-mix').click();
    }

    async goData() {
        await this.page.locator('.btn-data').click();
    }

    async goInstructions() {
        await this.page.locator('.btn-instructions').click();
    }

    async expectLoaded() {
        await expect(this.page.locator('h1')).toBeVisible();
    }

}
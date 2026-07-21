import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async fillUsername(username: string) {
    await this.page.locator('ion-input[data-testid="username"] input').fill(username);
  }

  async fillCode(code: string) {
    await this.page.locator('ion-input[data-testid="code"] input').fill(code);
  }

  async clickLogin() {
    await this.page.getByTestId('login-button').click();
  }

  async login(username: string, code: string) {
    await this.fillUsername(username);
    await this.fillCode(code);
    await this.clickLogin();
  }
}
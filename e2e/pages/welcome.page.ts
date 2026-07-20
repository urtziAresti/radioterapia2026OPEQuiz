import { Page } from '@playwright/test';

export class WelcomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async fillUsername(name: string) {
    await this.page.getByLabel('username').fill(name);
  }

  async startQuiz() {
    await this.page.getByRole('button', { name: /comenzar/i }).click();
  }
}

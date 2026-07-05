import { test, expect } from '@playwright/test';
import { WelcomePage } from '../pages/welcome.page';

test('start quiz', async ({ page }) => {
  const welcome = new WelcomePage(page);

  await welcome.goto();
  await welcome.fillUsername('Urtzi');
  await welcome.startQuiz();

  await expect(page).toHaveURL(/questions/);
});

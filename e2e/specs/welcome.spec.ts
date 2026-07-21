import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { WelcomePage } from '../pages/welcome.page';

test.describe('Welcome', () => {

  test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.goto();

    await login.login('ADMIN', '1234');

  });

  test('Debe iniciar RADIO', async ({ page }) => {

    const welcome = new WelcomePage(page);

    await welcome.startRadio();

  });

});
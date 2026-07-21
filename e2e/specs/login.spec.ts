import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('LoginComponent', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
  });

  test('Debe mostrar el formulario de login', async ({ page }) => {

    await expect(page.getByTestId('login-form')).toBeVisible();

    await expect(page.getByTestId('username')).toBeVisible();

    await expect(page.getByTestId('code')).toBeVisible();

    await expect(page.getByTestId('login-button')).toBeVisible();

    await expect(page.getByTestId('register-button')).toBeVisible();

  });

  test('El botón Login debe estar deshabilitado inicialmente', async ({ page }) => {

    await expect(page.getByTestId('login-button')).toBeDisabled();

  });

  test('Debe habilitar el botón al rellenar usuario y código', async ({ page }) => {

    const login = new LoginPage(page);

    await login.fillUsername('ADMIN');

    await login.fillCode('ADMIN');

    await expect(page.getByTestId('login-button')).toBeEnabled();

  });

  test('Debe iniciar sesión correctamente', async ({ page }) => {

    const login = new LoginPage(page);

    await login.login('ADMIN', 'ADMIN');

    await expect(page).toHaveURL(/welcome/);

  });

  test('Debe mostrar error con credenciales incorrectas', async ({ page }) => {

    const login = new LoginPage(page);

    await login.login('ADMIN', 'incorrecta');

    await expect(page).toHaveURL(/login|^\/$/);

    await expect(page.locator('ion-toast')).toBeVisible();

  });

  test('No debe navegar a Welcome con contraseña incorrecta', async ({ page }) => {

    const login = new LoginPage(page);

    await login.login('ADMIN', 'xxxx');

    await expect(page).not.toHaveURL(/welcome/);

  });

  test('Debe pulsar el botón Registrarse', async ({ page }) => {

    await page.getByTestId('register-button').click();

    // Si register() abre mailto:
    // await expect(page).toHaveURL(/mailto/);

    // Si llama a window.open también se puede comprobar.
  });

});
import { test, expect } from '@playwright/test';

test.describe('Login', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
    });

    test('Debe mostrar el formulario', async ({ page }) => {

        await expect(page.locator('input')).toHaveCount(2);

        await expect(
            page.getByRole('button')
        ).toContainText(/entrar/i);

    });

    test('No permite enviar formulario vacío', async ({ page }) => {

        await page.getByRole('button').click();

        await expect(page).toHaveURL(/login/);

    });

    test('Login correcto', async ({ page }) => {

        await page.locator('input').nth(0).fill('admin');

        await page.locator('input').nth(1).fill('1234');

        await page.getByRole('button').click();

        await expect(page).toHaveURL(/welcome/);

    });

    test('Usuario incorrecto', async ({ page }) => {

        await page.locator('input').nth(0).fill('xxxx');

        await page.locator('input').nth(1).fill('1234');

        await page.getByRole('button').click();

        await expect(page).toHaveURL(/login/);

    });

    test('Código incorrecto', async ({ page }) => {

        await page.locator('input').nth(0).fill('admin');

        await page.locator('input').nth(1).fill('9999');

        await page.getByRole('button').click();

        await expect(page).toHaveURL(/login/);

    });

});

import { test, expect } from '@playwright/test';

test.describe('Pruebas E2E del login', () => {

  test('permite iniciar sesion con credenciales correctas', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('Correo electrónico').fill('admin@test.com');

    await page.getByLabel('Contraseña').fill('123456');

    await page.getByRole('button', {
      name: 'Iniciar sesión',
    }).click();

    await expect(
      page.getByRole('status')
    ).toHaveText('Bienvenido al sistema');
  });

  test('muestra error con credenciales incorrectas', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('Correo electrónico').fill('admin@test.com');

    await page.getByLabel('Contraseña').fill('incorrecta');

    await page.getByRole('button', {
      name: 'Iniciar sesión',
    }).click();

    await expect(
      page.getByRole('status')
    ).toHaveText('Credenciales incorrectas');
  });

  test('impide enviar el formulario con campos vacios', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', {
      name: 'Iniciar sesión',
    }).click();

    await expect(
      page.getByLabel('Correo electrónico')
    ).toBeFocused();

    await expect(
      page.getByRole('status')
    ).toHaveCount(0);
  });

});

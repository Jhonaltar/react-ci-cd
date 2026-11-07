
import { test, expect } from '@playwright/test';

test('debe abrir correctamente la aplicacion React', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#root')).toBeVisible();
});

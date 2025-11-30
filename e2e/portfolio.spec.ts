import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ayan Batulan/);
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');

    // Test navigation to About section
    await page.click('a[href="#about"]');
    await expect(page.locator('#about')).toBeVisible();

    // Test navigation to Projects section
    await page.click('a[href="#projects"]');
    await expect(page.locator('#projects')).toBeVisible();
  });

  test('contact form validation works', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Form should not submit (browser validation)
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toBeFocused();
  });

  test('contact form submission', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');

    // Fill in the form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for success message
    await expect(page.locator('text=Thank you')).toBeVisible({ timeout: 5000 });
  });

  test('responsive navigation menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Navigation should be visible on mobile
    await expect(page.locator('a[href="#about"]').first()).toBeVisible();
    await expect(page.locator('a[href="#projects"]').first()).toBeVisible();
  });

  test('projects section displays correctly', async ({ page }) => {
    await page.goto('/');
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Should display the projects section
    await expect(page.locator('#projects')).toContainText('Featured Projects');
  });
});

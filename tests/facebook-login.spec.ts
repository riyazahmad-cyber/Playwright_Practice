import { test, chromium } from '@playwright/test';

test('facebook login with dummy credentials', async ({page}) => {

  console.log('Navigating to Facebook.');
  await page.goto('https://www.facebook.com/');

  console.log('Filling the email field.');
  await page.locator('input[name="email"]').fill('dummyuser@example.com');

  console.log('Filling the password field.');
  await page.locator('input[name="pass"]').fill('DummyPassword123');

  console.log('Clicking the Log in button.');
  await page.getByText('Log in').first().click();

  console.log('Closing Google Chrome.');
  await page.close();
});

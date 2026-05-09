const [test] = require('@playwright/test');
test('Login test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/account/login?ret=/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
    await page.waitForSelector('.inventory_list');
});
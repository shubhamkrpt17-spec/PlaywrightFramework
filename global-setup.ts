

// import { chromium } from '@playwright/test';
// import { TestConfig } from './test.config';

// export default async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   const config = new TestConfig();

//   await page.goto(config.appUrl);

//   await page.fill('#userEmail', config.email);
//   await page.fill('#userPassword', config.password);
//   await page.click('#login');

//   await page.waitForLoadState('networkidle');

//   await page.context().storageState({ path: './auth.json' });

//   await browser.close();
// };

import { chromium } from '@playwright/test';
import { TestConfig } from './test.config';

export default async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const config = new TestConfig();

  await page.goto(config.appUrl);
  await page.fill('#userEmail', config.email);
  await page.fill('#userPassword', config.password);
  await page.click('#login');

  await page.waitForLoadState('networkidle');

  await context.storageState({ path: './auth.json' });

  await browser.close();
};
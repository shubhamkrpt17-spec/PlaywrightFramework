
import { test } from '../fixtures/baseTest';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';


test.use({ storageState: './auth.json' });
test("@Master Verify that 3 products are getting displayed on UI", async ({ page, dashboardPage }) => {
    // await page.addInitScript(() => {
    //     window.localStorage.setItem(
    //         'token',
    //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWViOWIwZGY4NmJhNTFhNjU4M2M1YzEiLCJ1c2VyRW1haWwiOiJzaHViaGFtMkB0ZXN0LmNvbSIsInVzZXJNb2JpbGUiOjc1NTk0NDA2NDgsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3NzcyMDUyNzksImV4cCI6MTgwODc2Mjg3OX0.gGvylFvkNKnkLFzwJyOSzdVsYw4g--PvlBFb3pGcsPY'
    //     );
    // });
    await page.goto('#/dashboard/dash');
    console.log(await dashboardPage.getProducts());
  //  page.locator("",{has: page.locator('b',{hasText})})

})



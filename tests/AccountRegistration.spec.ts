
/*
    1. Navigate to the URL
    2. Go to my account and click on "Register"
    3. Fill in the details 
    4. Agree to privacy policy
    5. Validate the confirmation message

*/

import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { HomePage } from '../pages/HomePage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let config: TestConfig;
let homePage: HomePage;
let registrationPage: RegistrationPage;


test.use({ storageState: undefined });
test("@Master User registration testcase", async ({ page}) => {
    config = new TestConfig();
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
    await page.goto(config.appRegistration);

    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getLastName());
    await registrationPage.setEmail(RandomDataUtil.getEmailID());
    await registrationPage.setMobile(RandomDataUtil.getMobile());
    await registrationPage.setOccupation("Engineer");
    await registrationPage.setGender("Female");

    let password = RandomDataUtil.getPassword();

    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);
    await registrationPage.clickConfirm18YearOldCheckbox();
    await registrationPage.clickRegisterButton();

     await page.waitForTimeout(3000);
    await page.close();

})
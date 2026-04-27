
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { HomePage } from '../pages/HomePage';
import { DashboardPage } from '../pages/DashboardPage';


type myFixture = {
    loginPage:LoginPage,
    registrationPage:RegistrationPage
    homePage:HomePage;
    dashboardPage:DashboardPage;
};

export const test = base.extend<myFixture>({
    loginPage: async ({ page }, use) =>{
    await use(new LoginPage(page));
    },

    registrationPage: async ({ page }, use) =>{
    await use(new RegistrationPage(page));
    
    },

    homePage: async ({ page }, use) =>{
    await use(new HomePage(page));
    },

    dashboardPage: async ({ page }, use) =>{
    await use(new DashboardPage(page));
    }

});
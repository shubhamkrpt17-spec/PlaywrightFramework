import { Page, Locator, expect } from '@playwright/test';

export class RegistrationPage {
    private readonly page: Page;
    
    // Locators using CSS selectors
    private readonly txtFirstname: Locator;
    private readonly txtLastname: Locator;
    private readonly txtEmail: Locator;
    private readonly txtMobile: Locator;
    private readonly drpOccupation: Locator;
   // private readonly radioGender: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword:Locator;
    private readonly chkbxConfirm:Locator;
    private readonly btnRegister:Locator;

    constructor(page: Page) {
        this.page = page;
        
        // Initialize locators with CSS selectors
        this.txtFirstname = page.locator("input[type='firstname']");
        this.txtLastname = page.locator("input[type='lastname']");
        this.txtEmail = page.locator("input[type='email']");
        this.txtMobile = page.locator("#userMobile");
        this.drpOccupation = page.locator("select[formcontrolname='occupation']");
       // this.radioGender = page.locator("//input[@value='Male']");
        this.txtPassword = page.locator('#userPassword');
        this.txtConfirmPassword = page.locator("#confirmPassword");
        this.chkbxConfirm = page.locator("//input[@type='checkbox']");
        this.btnRegister = page.locator("//input[@type='submit']");
    }


    /**
     * Sets the first name in the registration form
     * @param fname - First name to enter
     */
    async setFirstName(fname: string): Promise<void> {
        await this.txtFirstname.fill(fname);
    }

    /**
     * Sets the last name in the registration form
     * @param lname - Last name to enter
     */
    async setLastName(lname: string): Promise<void> {
        await this.txtLastname.fill(lname);
    }

    /**
     * Sets the email in the registration form
     * @param email - Email to enter
     */
    async setEmail(email: string): Promise<void> {
        await this.txtEmail.fill(email);
    }


    /**
     * Sets the password in the registration form
     * @param pwd - Password to enter
     */
    async setPassword(pwd: string): Promise<void> {
        await this.txtPassword.fill(pwd);
    }

    async setMobile(mobile: string): Promise<void> {
        await this.txtMobile.fill(mobile);
    }

    async setOccupation(occ: string): Promise<void> {
        await this.drpOccupation.selectOption(occ);
    }

    async setGender(gender: string): Promise<void> {
        await this.page.locator(`//input[@value='${gender}']`).click();
    }

    async setConfirmPassword(cpwd: string): Promise<void> {
        await this.txtConfirmPassword.fill(cpwd);
    }

    async clickConfirm18YearOldCheckbox()
    {
        await this.chkbxConfirm.click();
    }

    async clickRegisterButton()
    {await this.btnRegister.click();}


    /**
     * Complete registration workflow
     * @param userData - Object containing registration data
     */
    async completeRegistration(userData: {             
        firstName: string;
        lastName: string;
        email: string;
        mobile:string;
        occupation:string;
        gender:string;
        password: string;
        confirmPassword:string;
       
       
    }): Promise<void> {
        await this.setFirstName(userData.firstName);
        await this.setLastName(userData.lastName);
        await this.setEmail(userData.email);
        await this.setMobile(userData.mobile);
        await this.setOccupation(userData.occupation);
        await this.setGender(userData.gender);
        await this.setPassword(userData.password);
        await this.setConfirmPassword(userData.confirmPassword);
        await this.clickConfirm18YearOldCheckbox();
        await this.clickRegisterButton();

    }
}









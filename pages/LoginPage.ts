import {Page, Locator} from '@playwright/test';

export class LoginPage
{

    private readonly page:Page;
  //  private readonly lnkLoginHere:Locator;
    private readonly txtEmail:Locator;
    private readonly txtPassword:Locator;
    private readonly btnLogin:Locator;
    private readonly alertErrorMessage:Locator;

    constructor(page:Page)
    {
        this.page=page;
       // this.lnkLoginHere = page.locator("//a[text()='Login here']");
        this.txtEmail = page.locator("#userEmail");
        this.txtPassword = page.locator("#userPassword");
        this.btnLogin = page.locator("#login");
        this.alertErrorMessage = page.locator("//div[text()=' Incorrect email or password. ']");
    }



    //action methods
    async loginFunctionality(mailId:string, pwd:string):Promise<void>
    {
       // await this.lnkLoginHere.click();
        await this.txtEmail.fill(mailId);
        await this.txtPassword.fill(pwd);
        await this.btnLogin.click();
    }

    async getErroMessage()
    {
        return (await this.alertErrorMessage.innerText()).trim();
    }



}

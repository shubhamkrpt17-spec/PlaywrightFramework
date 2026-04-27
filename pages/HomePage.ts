import { Page, Locator } from '@playwright/test';

export class HomePage{

    private readonly page: Page;
    //locators
    private readonly btnHome: Locator;



    //constructor
    constructor(page:Page){

        this.page=page;
        this.btnHome = page.locator("//button[text()=' HOME ']");
    }

    //action methods

      // Check if HomePage exists
    async isHomePageExists(){

        let home:string = await this.btnHome.innerText();
        if(home)
            return true;
        
        return false;
    }

}
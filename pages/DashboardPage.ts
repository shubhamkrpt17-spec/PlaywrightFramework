
import {Page,Locator} from '@playwright/test';

export class DashboardPage
{
    private readonly page:Page;
    private readonly products:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.products=page.locator("//div[@class='card-body']/h5");
    }

    async getProducts()
    {
        let prodArray:string[] = await this.products.allInnerTexts();
        return prodArray;
    }
 
}
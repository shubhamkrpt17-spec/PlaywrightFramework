
import { faker } from "@faker-js/faker";

export class RandomDataUtil
{
    static getFirstName()
    {return faker.person.firstName();}

    static getLastName()
    {return faker.person.lastName();}
        
    static getEmailID()
    {return faker.internet.email();}

    static getPassword(length:number=10)
    {return '$' + faker.internet.password({length}) + '&';}

    static getMobile()
    {
        const indianNumber =  faker.string.numeric({length:9})
        const mobileNumber = '9' + indianNumber;
        return mobileNumber;
    }


}


  
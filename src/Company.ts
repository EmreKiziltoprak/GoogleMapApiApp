import {faker} from "@faker-js/faker"

export class Company {
    companyName: string;
    catchPrase: string;
    location: {
        lat: number;
        lon: number;
    }

    constructor(){
        this.companyName = faker.company.name();
        this.catchPrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.address.latitude(),
            lon: faker.address.longitude()
        }
    }
}
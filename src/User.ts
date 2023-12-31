import {faker} from "@faker-js/faker"

export default "red";

export class User {
    name: string;
    location: {
        lat: number;
        lon: number;
    }

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: faker.address.latitude(),
            lon: faker.address.longitude()
        }
    }
}

google
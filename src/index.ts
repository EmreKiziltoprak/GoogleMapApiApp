import faker from "@faker-js/faker";
import {User} from "./User";
import {Company} from "./Company";
import { CustomMap } from "./CustomMap";
console.log("hi ");

const  map = new CustomMap("map");
const company = new Company();
const user = new User();

map.addMarker(user);
map.addMarker(company);

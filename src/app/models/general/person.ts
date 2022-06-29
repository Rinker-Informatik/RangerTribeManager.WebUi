import { Address } from "./address";

export interface Person{
    forname: string;
    surename: string;
    gender: string;
    birthdate: Date;
    phone: string;
    mobile: string;
    mail: string;
    address: Address;
}
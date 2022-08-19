import { Person } from "../general/person";

export interface ContactPerson extends Person{
    legalGuardian: boolean;
    pickUp: boolean;
    title: string;
}
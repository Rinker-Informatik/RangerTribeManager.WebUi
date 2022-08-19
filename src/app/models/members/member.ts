import { Person } from "../general/person";
import { Allergy } from "./allergy";
import { ContactPerson } from "./contactPerson";
import { Diseases } from "./diseases";
import { Legal } from "./legal";
import { Medication } from "./medication";
import { Vaccination } from "./vaccination";

export interface Member extends Person {
    id : string;
    contactpersons: [ContactPerson];
    medications: [Medication];
    allergies: [Allergy];
    diseases: [Diseases];
    vaccinations: [Vaccination];
    healthInsurance: string;
    swimmer: boolean;
    vegetarian: boolean;
    vegan: boolean;
    glutenfree: boolean;
    other: string;
    legal: Legal;
}

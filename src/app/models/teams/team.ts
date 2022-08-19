import { Member } from "../members/member";

export interface Team {
    id: string;
    name: string;
    class: string;
    members: Member[];
    leader: Member[];
    helper: Member[];
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { Member } from 'src/app/models/members/member';
import { Team } from 'src/app/models/teams/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { 
    this.teams = [
      {
        name: "Team1",
        id: "12345",
        class: "Kundschafter",
        members: this.members,
        leader: this.members,
        helper: this.members
      },
      {
        name: "Team2",
        id: "12344",
        class: "Kundschafter",
        members: this.members,
        leader: this.members,
        helper: this.members
      },
      {
        name: "Team3",
        id: "1233",
        class: "Kundschafter",
        members: this.members,
        leader: this.members,
        helper: this.members
      }
    ]
  }

  getAllTeams(): Observable<Team[]>{
    return new Observable<Team[]>((subscriber: Subscriber<Team[]>) => subscriber.next(this.teams));
  }

  private teams: Team[]; 

  private members: Member[] = [
    {
      id: "12345",
      forname: "Max",
      surename: "Mustermann", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "cMustermann@posteo.de",
      mobile: "015125498237",
      phone: "",
      swimmer: true,
      vegan: false,
      healthInsurance: "AOK",
      vegetarian: false,
      address: {
        street: "Am Schmitterberg", 
        housenumber: "15", 
        city: "Gedern", 
        zipcode: 63688
      },
      allergies: [
        {
          name: "Pollen",
          strength: "low"
        }
      ],
      contactpersons: [
        {
          address: {
            street: "Am Schmitterberg", 
            housenumber: "15", 
            city: "Gedern", 
            zipcode: 63688
          },
          birthdate: new Date('1996-05-24'), 
          forname: "Max",
          surename: "Mustermann",
          gender: "m",
          mail: "cMustermann@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: true,
          title: "Mutter"
        }
      ],
      diseases: [
        {
          name: "Erkrankung"
        }
      ],
      medications: [
        {
          name: "ASS",
          unit: "mg",
          evening: 50,
          midday: 20,
          morning: 0,
          night: 0,
          requirement: false,
          requirement_quantity: 0
        }
      ],
      vaccinations: [
        {
          name: "Corona",
          date: new Date('1996-05-24'), 
        }
      ],
      other: "",
      legal: {
        employeeCodeOfConductConfirmed: true,
        clause8aConfirmed: true,
        expandedCriminalRecordConfirmed: true,
        expandedCriminalRecordConfirmedDate: new Date('1996-05-24'),
        expandedCriminalRecord: "",
        communityMember: true,
        leaderSignUp: true,
        communityName: "Gemande YX",
        firstResponder: true,
        chainsawCourse: true,
        clause43IfSG: true,
        memberCanSwim: true,
        memberRightsOnOwnPicture: true,
        memberCanGoHome: true
      }
    },
    {
      id: "12345",
      forname: "Max",
      surename: "Mustermann", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "cMustermann@posteo.de",
      mobile: "015125498237",
      phone: "",
      swimmer: true,
      vegan: false,
      healthInsurance: "AOK",
      vegetarian: false,
      address: {
        street: "Am Schmitterberg", 
        housenumber: "15", 
        city: "Gedern", 
        zipcode: 63688
      },
      allergies: [
        {
          name: "Pollen",
          strength: "low"
        }
      ],
      contactpersons: [
        {
          address: {
            street: "Am Schmitterberg", 
            housenumber: "15", 
            city: "Gedern", 
            zipcode: 63688
          },
          birthdate: new Date('1996-05-24'), 
          forname: "Max",
          surename: "Mustermann",
          gender: "m",
          mail: "cMustermann@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: true,
          title: "Mutter"
        }
      ],
      diseases: [
        {
          name: "Erkrankung"
        }
      ],
      medications: [
        {
          name: "ASS",
          unit: "mg",
          evening: 50,
          midday: 20,
          morning: 0,
          night: 0,
          requirement: false,
          requirement_quantity: 0
        }
      ],
      vaccinations: [
        {
          name: "Corona",
          date: new Date('1996-05-24'), 
        }
      ],
      other: "",
      legal: {
        employeeCodeOfConductConfirmed: true,
        clause8aConfirmed: true,
        expandedCriminalRecordConfirmed: true,
        expandedCriminalRecordConfirmedDate: new Date('1996-05-24'),
        expandedCriminalRecord: "",
        communityMember: true,
        leaderSignUp: true,
        communityName: "Gemande YX",
        firstResponder: true,
        chainsawCourse: true,
        clause43IfSG: true,
        memberCanSwim: true,
        memberRightsOnOwnPicture: true,
        memberCanGoHome: true
      }
    },
    {
      id: "12345",
      forname: "Max",
      surename: "Mustermann", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "cMustermann@posteo.de",
      mobile: "015125498237",
      phone: "",
      swimmer: true,
      vegan: false,
      healthInsurance: "AOK",
      vegetarian: false,
      address: {
        street: "Am Schmitterberg", 
        housenumber: "15", 
        city: "Gedern", 
        zipcode: 63688
      },
      allergies: [
        {
          name: "Pollen",
          strength: "low"
        }
      ],
      contactpersons: [
        {
          address: {
            street: "Am Schmitterberg", 
            housenumber: "15", 
            city: "Gedern", 
            zipcode: 63688
          },
          birthdate: new Date('1996-05-24'), 
          forname: "Max",
          surename: "Mustermann",
          gender: "m",
          mail: "cMustermann@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: true,
          title: "Mutter"
        }
      ],
      diseases: [
        {
          name: "Erkrankung"
        }
      ],
      medications: [
        {
          name: "ASS",
          unit: "mg",
          evening: 50,
          midday: 20,
          morning: 0,
          night: 0,
          requirement: false,
          requirement_quantity: 0
        }
      ],
      vaccinations: [
        {
          name: "Corona",
          date: new Date('1996-05-24'), 
        }
      ],
      other: "",
      legal: {
        employeeCodeOfConductConfirmed: true,
        clause8aConfirmed: true,
        expandedCriminalRecordConfirmed: true,
        expandedCriminalRecordConfirmedDate: new Date('1996-05-24'),
        expandedCriminalRecord: "",
        communityMember: true,
        leaderSignUp: true,
        communityName: "Gemande YX",
        firstResponder: true,
        chainsawCourse: true,
        clause43IfSG: true,
        memberCanSwim: true,
        memberRightsOnOwnPicture: true,
        memberCanGoHome: true
      }
    },
    {
      id: "12345",
      forname: "Max",
      surename: "Mustermann", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "cMustermann@posteo.de",
      mobile: "015125498237",
      phone: "",
      swimmer: true,
      vegan: false,
      healthInsurance: "AOK",
      vegetarian: false,
      address: {
        street: "Am Schmitterberg", 
        housenumber: "15", 
        city: "Gedern", 
        zipcode: 63688
      },
      allergies: [
        {
          name: "Pollen",
          strength: "low"
        }
      ],
      contactpersons: [
        {
          address: {
            street: "Am Schmitterberg", 
            housenumber: "15", 
            city: "Gedern", 
            zipcode: 63688
          },
          birthdate: new Date('1996-05-24'), 
          forname: "Max",
          surename: "Mustermann",
          gender: "m",
          mail: "cMustermann@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: true,
          title: "Mutter"
        }
      ],
      diseases: [
        {
          name: "Erkrankung"
        }
      ],
      medications: [
        {
          name: "ASS",
          unit: "mg",
          evening: 50,
          midday: 20,
          morning: 0,
          night: 0,
          requirement: false,
          requirement_quantity: 0
        }
      ],
      vaccinations: [
        {
          name: "Corona",
          date: new Date('1996-05-24'), 
        }
      ],
      other: "",
      legal: {
        employeeCodeOfConductConfirmed: true,
        clause8aConfirmed: true,
        expandedCriminalRecordConfirmed: true,
        expandedCriminalRecordConfirmedDate: new Date('1996-05-24'),
        expandedCriminalRecord: "",
        communityMember: true,
        leaderSignUp: true,
        communityName: "Gemande YX",
        firstResponder: true,
        chainsawCourse: true,
        clause43IfSG: true,
        memberCanSwim: true,
        memberRightsOnOwnPicture: true,
        memberCanGoHome: true
      }
    }
  ]
}

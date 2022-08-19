import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Member } from 'src/app/models/members/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  private members: Member[] = [
    {
      id: "12345",
      forname: "Chris",
      surename: "Rinker", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "crinker@posteo.de",
      mobile: "015125498237",
      phone: "06045983982",
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
          forname: "Christopher",
          surename: "Rinker",
          gender: "m",
          mail: "crinker@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: false,
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
      forname: "Chris",
      surename: "Rinker", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "crinker@posteo.de",
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
          forname: "Christopher",
          surename: "Rinker",
          gender: "m",
          mail: "crinker@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: false,
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
      forname: "Chris",
      surename: "Rinker", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "crinker@posteo.de",
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
          forname: "Christopher",
          surename: "Rinker",
          gender: "m",
          mail: "crinker@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: false,
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
      forname: "Chris",
      surename: "Rinker", 
      gender: "m", 
      birthdate: new Date('1996-05-24'),
      glutenfree: false,
      mail: "crinker@posteo.de",
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
          forname: "Christopher",
          surename: "Rinker",
          gender: "m",
          mail: "crinker@posteo.de",
          mobile: "015125498237",
          phone: "",
          pickUp: true,
          legalGuardian: false,
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

  // returns all Members for user permission
  getAllMembers(): Observable<Member[]> {
    return new Observable<Member[]>((subscriber: Subscriber<Member[]>) => subscriber.next(this.members));
  }
}

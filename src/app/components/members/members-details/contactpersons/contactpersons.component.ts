import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactPerson } from 'src/app/models/members/contactPerson';

@Component({
  selector: 'app-contactpersons',
  templateUrl: './contactpersons.component.html',
  styleUrls: ['./contactpersons.component.scss']
})
export class ContactpersonsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'forname', 'surename', 'phone', 'mobile', 'mail', 'address', 'legalGuardian', 'pickUp'];

  @Input() contactPersons: ContactPerson[] = [];

  contactpersonForm = this.fb.group({
    forname: [''],
    surename: [''],
    gender: [''],
    birthdate: [''],
    phone: [''],
    mobile: [''],
    mail: [''],   
    address: this.fb.group({
      street: [''],
      housenumber: [''],
      zipcode: [''],
      city: ['']
    }),
    legalGuardian: [''],
    pickUp: [''],
    title: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.contactpersonForm.setValue({
      forname: [''],
      surename: [''],
      gender: [''],
      birthdate: [''],
      phone: [''],
      mobile: [''],
      mail: [''],   
      address: {
        street: [''],
        housenumber: [''],
        zipcode: [''],
        city: ['']
      },
      legalGuardian: false,
      pickUp: false,
      title: ['']
    })
  }

}

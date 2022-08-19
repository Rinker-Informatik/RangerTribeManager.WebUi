import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Member } from 'src/app/models/members/member';
import { MembersService } from 'src/app/services/members/members.service';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.scss']
})
export class MembersDetailsComponent implements OnInit {
  
  @Input() member: Member = {} as Member;

  panelOpenState: boolean = false;

  memberForm = this.fb.group({
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
    vegetarian: [''],
    swimmer: [''],
    vegan: [''],
    glutenfree: [''],
    other: ['']
  });

  constructor(private fb: FormBuilder,
    private memberService: MembersService) { }

  ngOnInit(): void{
    this.memberService.getAllMembers().subscribe(members => {
      this.member = members[0];
    });

    this.memberForm.setValue({
      forname: [this.member.forname],
      surename: [this.member.surename],
      gender: [this.member.gender],
      birthdate: [this.member.birthdate.toLocaleDateString()],
      phone: [this.member.phone],
      mobile: [this.member.mobile],
      mail: [this.member.mail],
      address: {
        street: [this.member.address.street],
        housenumber: [this.member.address.housenumber],
        zipcode: [this.member.address.zipcode],
        city: [this.member.address.city],
      },
      vegetarian: [''],
      swimmer: [''],
      vegan: [''],
      glutenfree: [''],
      other: [''],
    });
  }

}

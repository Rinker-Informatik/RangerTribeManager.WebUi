import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Legal } from 'src/app/models/members/legal';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  @Input() legal: Legal = {} as Legal;
  
  legalForm = this.fb.group({
    employeeCodeOfConductConfirmed: [''],
    employeeCodeOfConductConfirmedDate: [''],
    clause8aConfirmed: [''],
    clause8aConfirmedDate: [''],
    expandedCriminalRecordConfirmed: [''],
    expandedCriminalRecordConfirmedDate: [''],
    communityMember: [''],
    leaderSignUp: [''],
    communityName: [''],
    firstResponder: [''],
    chainsawCourse: [''],
    clause43IfSG: [''],
    memberCanSwim: [''],
    memberRightsOnOwnPicture: [''],
    memberCanGoHome: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.legalForm.setValue({
      employeeCodeOfConductConfirmed: [this.legal.employeeCodeOfConductConfirmed],
      employeeCodeOfConductConfirmedDate: [''],
      clause8aConfirmed: [this.legal.clause8aConfirmed],
      clause8aConfirmedDate: [''],
      expandedCriminalRecordConfirmed: [this.legal.expandedCriminalRecordConfirmed],
      expandedCriminalRecordConfirmedDate: [this.legal.expandedCriminalRecordConfirmedDate],
      communityMember: [this.legal.communityMember],
      leaderSignUp: [this.legal.leaderSignUp],
      communityName: [this.legal.communityName],
      firstResponder: [this.legal.firstResponder],
      chainsawCourse: [this.legal.chainsawCourse],
      clause43IfSG: [this.legal.clause43IfSG],
      memberCanSwim: [this.legal.memberCanSwim],
      memberRightsOnOwnPicture: [this.legal.memberRightsOnOwnPicture],
      memberCanGoHome: [this.legal.memberCanGoHome]
    });
  }

}

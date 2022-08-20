import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { Member } from 'src/app/models/members/member';
import { MembersService } from 'src/app/services/members/members.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})

export class TeamDetailsComponent implements OnInit {

  myControl = new FormControl();
  members: Member[] = [];
  filteredOptions: any;

  constructor(private fb: FormBuilder,
    private memberService: MembersService){}

  ngOnInit(): void {

    this.memberService.getAllMembers().subscribe(members => {
      if (members){
        this.members = members;
      }
    });

    if (this.members){
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : value['surename'])),
        map(name => (name ? this._filter(name) : this.members.slice())),
      );
    }

  }

  displayFn(member: Member): string {
    return member && member.surename ? member.surename : '';
  }

  private _filter(name: string): Member[] {
    const filterValue = name.toLowerCase();

    return this.members.filter(member => member.surename.toLowerCase().includes(filterValue));
  }
}

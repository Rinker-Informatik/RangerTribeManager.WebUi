import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/teams/team';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() team: Team = {} as Team;

  constructor() { }

  ngOnInit(): void {
  }

}

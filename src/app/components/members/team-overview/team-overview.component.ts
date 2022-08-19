import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Team } from 'src/app/models/teams/team';
import { TeamsService } from 'src/app/services/members/teams.service';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {

  teams: Team[] | undefined;

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe(teams => {
      this.teams = teams;
    }) 
  }

}

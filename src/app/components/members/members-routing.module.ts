import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailsComponent } from './members-details/members-details.component';
import { MembersComponent } from './members.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent
  },
  {
    path: 'member/:id',
    component: MembersDetailsComponent
  },
  {
    path: 'team/:id',
    component: TeamDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }

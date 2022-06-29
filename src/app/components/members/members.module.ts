import { NgModule } from '@angular/core';
import { MembersRoutingModule } from './members-routing.module';

import { MembersComponent } from './members.component';
import { MembersOverviewComponent } from './members-overview/members-overview.component';
import { MembersDetailsComponent } from './members-details/members-details.component';
import { MembersNewComponent } from './members-new/members-new.component';
 
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MembersComponent,
    MembersOverviewComponent,
    MembersDetailsComponent,
    MembersNewComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [
  ],
  bootstrap: []
})
export class MembersModule { }

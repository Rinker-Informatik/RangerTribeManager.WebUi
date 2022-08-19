import { NgModule } from '@angular/core';
import { MembersRoutingModule } from './members-routing.module';
import { CommonModule } from '@angular/common';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamNewComponent } from './team-new/team-new.component';
import { TeamCardComponent } from './team-card/team-card.component';

import { MembersComponent } from './members.component';
import { MembersOverviewComponent } from './members-overview/members-overview.component';
import { MembersDetailsComponent } from './members-details/members-details.component';
import { MembersNewComponent } from './members-new/members-new.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ContactpersonsComponent } from './members-details/contactpersons/contactpersons.component';
import { HealthComponent } from './members-details/health/health.component';
import { LegalComponent } from './members-details/legal/legal.component';


@NgModule({
  declarations: [
    MembersComponent,
    MembersOverviewComponent,
    MembersDetailsComponent,
    MembersNewComponent,
    TeamOverviewComponent,
    TeamDetailsComponent,
    TeamNewComponent,
    TeamCardComponent,
    ContactpersonsComponent,
    HealthComponent,
    LegalComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MembersRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatSelectModule,
  ],
  providers: [
  ],
  bootstrap: []
})
export class MembersModule { }

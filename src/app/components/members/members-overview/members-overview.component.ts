import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/members/member';
import { MembersService } from 'src/app/services/members/members.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-members-overview',
  templateUrl: './members-overview.component.html',
  styleUrls: ['./members-overview.component.scss']
})
export class MembersOverviewComponent implements OnInit {

  displayedColumns: string[] = ['forname', 'surename', 'birthdate', 'gender', 'mobile', 'mail'];
  membersObservable: Observable<Member[]> = new Observable<Member[]>();

  constructor(
    private membersService: MembersService,
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.membersObservable = this.membersService.getAllMembers();
  }

  forwardingToUser(selectedRow: any){
    this.router.navigate([selectedRow['id']], { relativeTo: this.route });
    
  }

}

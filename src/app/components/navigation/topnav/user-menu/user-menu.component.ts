import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly authService: AuthService) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.authService.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.authService.loadUserProfile();
    }
  }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout(undefined);
  }

  openUserSettings(){
    this.authService.redirectToProfile();
  }
}

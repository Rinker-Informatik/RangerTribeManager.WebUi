import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private keycloakService: KeycloakService) { }

  getLoggedUser(): KeycloakTokenParsed | undefined{
    try{
      const userDetails: KeycloakTokenParsed | undefined = this.keycloakService.getKeycloakInstance().idTokenParsed;
      return userDetails;
    }
    catch (e){
      console.error("exception", e);
      return undefined;
    }
  }

  isLoggedIn(): Promise<boolean>{
    return this.keycloakService.isLoggedIn();
  } 

  loadUserProfile(): Promise<KeycloakProfile>{
    return this.keycloakService.loadUserProfile();
  }

  login(): void {
    this.keycloakService.login();
  }

  logout(redirectionUrl: string | undefined): void {
    this.keycloakService.logout();
    console.log("logout");
    
    this.http.delete("http://localhost:8080/admin/realms/TribeManager/sessions/6c1a21dc-bb57-4793-b1a5-556f1a99778a")
  }
  
  redirectToProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  getRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}

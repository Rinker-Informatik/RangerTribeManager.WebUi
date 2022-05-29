import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopnavComponent } from './topnav/topnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationComponent } from './navigation.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { UserMenuComponent } from './topnav/user-menu/user-menu.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'TribeManager',
        clientId: 'frontend'
      },
      loadUserProfileAtStartUp: false,
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: true
      },
      bearerExcludedUrls: []
    });
}

@NgModule({
  declarations: [
    TopnavComponent,
    NavigationComponent,
    UserMenuComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    KeycloakAngularModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }

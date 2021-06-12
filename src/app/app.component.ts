import { PlatformLocation, ɵBrowserPlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  logged: boolean;
  public userProfile: KeycloakProfile | null = null;

  constructor(private keycloak: KeycloakService, private platform: PlatformLocation){}

  ngOnInit(): void {
    this.isLogged();
  }

  async isLogged()  {
    this.logged = await this.keycloak.isLoggedIn();

    if (this.logged){
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  logout(){
    let baseRoute = (this.platform as any).location.origin;
    //console.log((this.platform as any).location.origin);
    this.keycloak.logout(baseRoute);
  }

  login(){
    this.keycloak.login();
  }
}

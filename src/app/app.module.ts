import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { PrivatepageComponent } from './privatepage/privatepage.component';
import { KeycloakService } from 'keycloak-angular';
import { Publicpage2Component } from './publicpage2/publicpage2.component';
import { PrivateAdminComponent } from './private-admin/private-admin.component';

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config:{
          url: 'https://localhost:8080/auth',
          realm: 'demo',
          clientId: 'webapp'
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        }
      });
}


@NgModule({
  declarations: [
    AppComponent,
    PublicpageComponent,
    PrivatepageComponent,
    Publicpage2Component,
    PrivateAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    KeycloakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

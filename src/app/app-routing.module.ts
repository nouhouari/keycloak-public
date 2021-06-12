import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from './guard/admin-auth.guard';
import { AuthGuard } from './guard/auth.guard';
import { PrivateAdminComponent } from './private-admin/private-admin.component';
import { PrivatepageComponent } from './privatepage/privatepage.component';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { Publicpage2Component } from './publicpage2/publicpage2.component';

const routes: Routes = [
  { path: '', redirectTo:'public', pathMatch: 'full'},
  { path: 'public', component: PublicpageComponent},
  { path: 'public/p2', component: Publicpage2Component},
  { path: 'private', component: PrivatepageComponent, canActivate: [AuthGuard]},
  { path: 'private/admin', component: PrivateAdminComponent, canActivate: [AuthGuard, AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

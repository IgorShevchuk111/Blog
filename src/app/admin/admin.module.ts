import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageAdminComponent } from './home-page-admin/home-page-admin.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: [
    {path: 'login', component: LoginPageComponent},
    {path: 'create', component: CreatePageComponent, canActivate:[AuthGuardService],},
    {path: 'home', component: HomePageAdminComponent, canActivate:[AuthGuardService],}
  ]}
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent,
    LoginPageComponent,
    HomePageAdminComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }

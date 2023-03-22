import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent}
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent,
    LoginPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class AdminModule { }

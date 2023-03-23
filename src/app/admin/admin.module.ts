import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialModule } from '../shared/material/material/material.module';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent}
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent,
    LoginPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CreatePageComponent } from './create-page/create-page.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent}
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdminModule { }

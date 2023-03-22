import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../home-page/home-page.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: 'home', component: HomePageComponent}
  ]},
  {path: 'admin', loadChildren: () => import('../../admin/module/admin-routing.module').then(m => m.AdminRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

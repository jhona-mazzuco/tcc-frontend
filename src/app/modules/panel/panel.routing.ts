import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PanelRoutingModule { }

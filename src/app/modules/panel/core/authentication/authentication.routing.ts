import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'recuperacao',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationRoutingModule { }

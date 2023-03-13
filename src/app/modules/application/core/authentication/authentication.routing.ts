import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: SignUpComponent
  },
  {
    path: 'recuperacao',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}

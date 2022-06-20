import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { OnlyUnauthenticatedGuard } from "./guards/only-unauthenticated.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [OnlyUnauthenticatedGuard]
  },
  {
    path: 'recuperacao',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
    canActivate: [OnlyUnauthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRouting {
}

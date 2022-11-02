import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthenticatedGuard } from "./core/authentication/guards/authenticated.guard";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/shell/shell.module').then(m => m.ShellModule),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRouting { }

import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./components/shell/shell.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['painel/login']);

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRouting {
}

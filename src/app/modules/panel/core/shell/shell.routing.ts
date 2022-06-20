import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./components/shell/shell.component";
import { OnlyAuthenticatedGuard } from "./guards/only-authenticated.guard";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [OnlyAuthenticatedGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShellRoutingModule {
}

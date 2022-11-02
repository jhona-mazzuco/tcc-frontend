import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./components/shell/shell.component";

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
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule),
      },
      {
        path: 'campos',
        loadChildren: () => import('../../pages/field/field.module').then(m => m.FieldModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRouting {
}

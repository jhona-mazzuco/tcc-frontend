import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'horarios',
        loadChildren: () => import('./pages/scheduling/scheduling.module').then(m => m.SchedulingModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ])
  ],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

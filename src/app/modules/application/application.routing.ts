import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AuthenticatedGuard } from "./core/authentication/guards/authenticated.guard";
import { ShellComponent } from "./core/shell/shell.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule)
      },
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'horarios',
            loadChildren: () => import('./pages/scheduling/scheduling.module').then(m => m.SchedulingModule)
          },
          {
            path: 'agendados',
            loadChildren: () => import('./pages/scheduled/scheduled.module').then(m => m.ScheduledModule),
            canActivate: [AuthenticatedGuard]
          },
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {
}

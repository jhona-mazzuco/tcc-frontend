import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AuthenticatedGuard } from "../../core/authentication/guards/authenticated.guard";
import { FieldComponent } from "./components/field/field.component";
import { SchedulesComponent } from "./components/schedules/schedules.component";
import { SchedulingComponent } from "./components/scheduling/scheduling.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FieldComponent
      },
      {
        path: ':id',
        component: SchedulesComponent
      },
      {
        path: ':id/agendar',
        component: SchedulingComponent,
        canActivate: [AuthenticatedGuard]
      },
    ])
  ],
  exports: [RouterModule]
})
export class SchedulingRoutingModule {
}

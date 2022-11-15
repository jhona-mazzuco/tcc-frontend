import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { TransformValueToLabelPipe } from "@shared/pipes/transform-value-to-label.pipe";
import { NavbarModule } from "../../core/navbar/navbar.module";
import { ScheduledTableComponent } from './components/scheduled-table/scheduled-table.component';
import { ScheduledComponent } from './scheduled.component';
import { ScheduledRoutingModule } from "./scheduled.routing";


@NgModule({
  declarations: [
    ScheduledComponent,
    ScheduledTableComponent
  ],
  imports: [
    CommonModule,
    ScheduledRoutingModule,
    NavbarModule,
    LoadingComponent,
    MatCardModule,
    MatTableModule,
    TransformValueToLabelPipe
  ]
})
export class ScheduledModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from "../../core/navbar/navbar.module";
import { ContainerComponent } from './components/container/container.component';
import { SchedulingRoutingModule } from "./scheduling.routing";

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SchedulingRoutingModule
  ]
})
export class SchedulingModule { }

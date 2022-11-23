import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { DaySelectBarComponent } from "../day-select-bar/day-select-bar.component";
import { DaySelectContainerComponent } from "./day-select-container.component";

@NgModule({
  declarations: [
    DaySelectContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaySelectBarComponent
  ],
  exports: [
    DaySelectContainerComponent,
  ]
})
export class DaySelectContainerModule {
}

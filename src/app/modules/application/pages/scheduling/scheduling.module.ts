import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DaySelectContainerModule } from "@shared/components/day-select-container/day-select-container.module";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { NotificationService } from "@shared/notification/notification.service";
import { TransformValueToLabelPipe } from "@shared/pipes/transform-value-to-label.pipe";
import { NavbarModule } from "../../core/navbar/navbar.module";
import { FieldRowComponent } from './components/field/components/field-row/field-row.component';
import { FieldComponent } from './components/field/field.component';
import { ScheduleItemComponent } from './components/schedules/components/schedule-item/schedule-item.component';
import { TranslateStatusPipe } from './components/schedules/pipes/translate-status.pipe';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { FoodTypesComponent } from './components/scheduling/components/food-types/food-types.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { SchedulingRoutingModule } from "./scheduling.routing";

@NgModule({
  declarations: [
    SchedulesComponent,
    FieldComponent,
    FieldRowComponent,
    ScheduleItemComponent,
    TranslateStatusPipe,
    SchedulingComponent,
    FoodTypesComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SchedulingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    LoadingComponent,
    TransformValueToLabelPipe,
    MatCheckboxModule,
    DaySelectContainerModule
  ],
  providers: [NotificationService]
})
export class SchedulingModule {
}

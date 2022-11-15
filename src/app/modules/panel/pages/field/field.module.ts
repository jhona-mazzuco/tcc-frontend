import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NotificationService } from "@shared/notification/notification.service";
import { EditBtnModule } from "../../shared/components/edit-btn/edit-btn.module";
import { RemoveBtnModule } from "../../shared/components/remove-btn/remove-btn.module";
import { TimepickerModule } from "../../shared/components/timepicker/timepicker.module";
import { FieldCreateComponent } from './components/field-create/field-create.component';
import { FieldEditComponent } from './components/field-edit/field-edit.component';
import { FieldFormComponent } from './components/field-form/field-form.component';
import { FieldListComponent } from './components/field-list/field-list.component';
import { IgnoredHoursInputComponent } from './components/ignored-hours-input/ignored-hours-input.component';
import { FieldRouting } from "./field.routing";
import { TransformValueToLabelPipe } from '@shared/pipes/transform-value-to-label.pipe';
import { TransformValueToTimePipe } from './pipes/transform-value-to-time.pipe';


@NgModule({
  declarations: [
    FieldListComponent,
    FieldCreateComponent,
    FieldFormComponent,
    FieldEditComponent,
    IgnoredHoursInputComponent,
    TransformValueToTimePipe,
  ],
  imports: [
    CommonModule,
    FieldRouting,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AngularFirestoreModule,
    EditBtnModule,
    RemoveBtnModule,
    MatPaginatorModule,
    TimepickerModule,
    MatCheckboxModule,
    TransformValueToLabelPipe,
  ],
  providers: [NotificationService]
})
export class FieldModule {
}

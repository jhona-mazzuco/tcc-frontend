import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { EditBtnModule } from "../../shared/components/edit-btn/edit-btn.module";
import { FieldCreateComponent } from './components/field-create/field-create.component';
import { FieldDeleteBtnComponent } from './components/field-delete-btn/field-delete-btn.component';
import { FieldDetailComponent } from './components/field-detail/field-detail.component';
import { FieldEditComponent } from './components/field-edit/field-edit.component';
import { FieldFileTableComponent } from './components/field-file-table/field-file-table.component';
import { FieldFormComponent } from './components/field-form/field-form.component';
import { FieldImageUploadComponent } from './components/field-image-upload/field-image-upload.component';
import { FieldListComponent } from './components/field-list/field-list.component';
import { FieldRouting } from "./field.routing";


@NgModule({
  declarations: [
    FieldListComponent,
    FieldCreateComponent,
    FieldFormComponent,
    FieldEditComponent,
    FieldDeleteBtnComponent,
    FieldImageUploadComponent,
    FieldFileTableComponent,
    FieldDetailComponent
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
    EditBtnModule
  ]
})
export class FieldModule { }

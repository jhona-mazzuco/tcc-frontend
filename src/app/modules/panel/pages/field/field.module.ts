import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldListComponent } from './components/field-list/field-list.component';
import { FieldCreateComponent } from './components/field-create/field-create.component';
import { FieldFormComponent } from './components/field-form/field-form.component';
import { FieldEditComponent } from './components/field-edit/field-edit.component';
import { FieldDeleteBtnComponent } from './components/field-delete-btn/field-delete-btn.component';
import { FieldRouting } from "./field.routing";



@NgModule({
  declarations: [
    FieldListComponent,
    FieldCreateComponent,
    FieldFormComponent,
    FieldEditComponent,
    FieldDeleteBtnComponent
  ],
  imports: [
    CommonModule,
    FieldRouting
  ]
})
export class FieldModule { }

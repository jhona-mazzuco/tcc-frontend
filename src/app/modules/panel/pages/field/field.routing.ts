import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FieldCreateComponent } from "./components/field-create/field-create.component";
import { FieldEditComponent } from "./components/field-edit/field-edit.component";
import { FieldListComponent } from "./components/field-list/field-list.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FieldListComponent
      },
      {
        path: 'novo',
        component: FieldCreateComponent
      },
      {
        path: ':id/editar',
        component: FieldEditComponent
      },
    ])
  ],
  exports: [RouterModule]
})
export class FieldRouting {
}

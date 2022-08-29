import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule } from "@angular/router";
import { EditBtnComponent } from './edit-btn.component';


@NgModule({
  declarations: [
    EditBtnComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [EditBtnComponent]
})
export class EditBtnModule {
}

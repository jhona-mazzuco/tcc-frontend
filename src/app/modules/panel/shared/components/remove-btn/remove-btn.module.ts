import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { RemoveBtnComponent } from './remove-btn.component';


@NgModule({
  declarations: [
    RemoveBtnComponent
  ],
  exports: [
    RemoveBtnComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class RemoveBtnModule {
}

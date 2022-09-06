import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
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
    MatButtonModule
  ]
})
export class RemoveBtnModule {
}

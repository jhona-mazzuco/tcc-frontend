import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { PreviewModalComponent } from "./preview-modal.component";
import { PreviewModalService } from "./services/preview-modal.service";


@NgModule({
  declarations: [PreviewModalComponent],
  exports: [PreviewModalComponent],
  providers: [PreviewModalService],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class PreviewModalModule {
}

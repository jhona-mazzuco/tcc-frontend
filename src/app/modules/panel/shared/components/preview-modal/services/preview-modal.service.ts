import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { PreviewModalComponent } from "../preview-modal.component";

@Injectable({
  providedIn: 'root'
})
export class PreviewModalService {
  constructor(private dialog: MatDialog) { }

  open(src: string): void {
    const ref = this.dialog.open(PreviewModalComponent, {
      panelClass: 'transparent-dialog',
      backdropClass: 'preview-dialog-backdrop',
      enterAnimationDuration: '10ms'
    });
    ref.componentInstance.src = src;
  }
}

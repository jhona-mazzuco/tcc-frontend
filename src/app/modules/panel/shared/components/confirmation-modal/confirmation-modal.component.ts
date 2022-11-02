import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class ConfirmationModalComponent {
  @Input() title: string = 'Deseja continuar?';
  @Input() message: string = 'Clique em continuar caso deseja continuar!';
  @Input() cancelBtn: string = 'Cancelar';
  @Input() continueBtn: string = 'Continuar';
  constructor(public ref: MatDialogRef<ConfirmationModalComponent>) {
  }
}

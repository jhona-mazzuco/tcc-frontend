import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { filter, ReplaySubject, takeUntil, tap } from "rxjs";
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";

@Component({
  selector: 'app-remove-btn',
  templateUrl: './remove-btn.component.html',
  styleUrls: ['./remove-btn.component.scss']
})
export class RemoveBtnComponent {
  @Output() remove = new EventEmitter();

  destroy$ = new ReplaySubject(1);

  constructor(private dialog: MatDialog) {
  }

  openConfirmationModal(): void {
    const ref = this.dialog.open(ConfirmationModalComponent);

    ref.componentInstance.title = 'Deseja excluir?';
    ref.componentInstance.message = 'Clique em "Excluir" para continuar com a exclusão!';
    ref.componentInstance.cancelBtn = 'Cancelar';
    ref.componentInstance.continueBtn = 'Excluir';

    ref.afterClosed()
      .pipe(
        takeUntil(this.destroy$),
        filter(value => value),
        tap(() => this.remove.emit())
      ).subscribe();
  }
}

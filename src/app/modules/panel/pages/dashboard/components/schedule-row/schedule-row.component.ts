import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, filter, switchMap, takeUntil, tap } from "rxjs";
import { ConfirmationModalComponent } from "../../../../shared/components/confirmation-modal/confirmation-modal.component";
import { Schedule } from "../../interfaces/schedule.interface";
import { DashboardService } from "../../services/dashboard.service";
import { FoodModalComponent } from "../food-modal/food-modal.component";

@Component({
  selector: 'app-schedule-row',
  templateUrl: './schedule-row.component.html',
  styleUrls: ['./schedule-row.component.scss']
})
export class ScheduleRowComponent extends BaseComponent {
  @Input() schedule!: Schedule;
  @Output() removeItem = new EventEmitter<Schedule>();

  constructor(
    private modal: MatDialog,
    private service: DashboardService,
    notification: NotificationService
  ) {
    super(notification);
  }

  openFoodModal(): void {
    const ref = this.modal.open(FoodModalComponent, {
      width: '300px',
      height: '400px',
      hasBackdrop: true,
    });

    ref.componentInstance.id = this.schedule.id;
  }

  cancelSchedule(): void {
    const ref = this.modal.open(ConfirmationModalComponent);

    ref.componentInstance.title = 'Desmarcar horário';
    ref.componentInstance.message = 'Você tem certeza que deseja desmarcar o horário?';
    ref.componentInstance.cancelBtn = 'Cancelar';
    ref.componentInstance.continueBtn = 'Desmarcar';

    ref.afterClosed()
      .pipe(
        takeUntil(this.destroy$),
        filter(value => value),
        switchMap(() =>  this.service.cancelSchedule(this.schedule.id)),
        tap(({ message }) => {
          this.notification.success(message);
          this.removeItem.emit(this.schedule);
        }),
        catchError(({ error }) => this.catchError(error?.message))
      ).subscribe();
  }
}

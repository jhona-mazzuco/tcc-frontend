import { DatePipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, finalize, takeUntil, tap } from "rxjs";
import { SchedulingService } from "../../../../services/scheduling.service";
import { Schedule } from "../../interfaces/schedule.interface";

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
  providers: [DatePipe]
})
export class SchedulesComponent extends BaseComponent implements OnInit, OnDestroy {
  id!: string;
  date!: string;
  loading!: boolean;
  items!: Schedule[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private schedulingService: SchedulingService,
    notification: NotificationService
  ) {
    super(notification);
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  onChangeDate(date: string | null): void {
    this.date = date!;
    this.loading = true;
    this.schedulingService.getSchedulesOfDay(this.id, date!)
      .pipe(
        takeUntil(this.destroy$),
        tap((data) => this.items = data!),
        catchError(() => this.catchError()),
        finalize(() => this.loading = false)
      ).subscribe();
  }
}

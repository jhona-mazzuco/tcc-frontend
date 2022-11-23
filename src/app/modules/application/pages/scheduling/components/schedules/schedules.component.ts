import { DatePipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { Observable } from "rxjs";
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
  items$!: Observable<Schedule[]>;
  date!: string;

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
    this.items$ = this.schedulingService.getSchedulesOfDay(this.id, date!);
  }
}

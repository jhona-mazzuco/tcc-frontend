import { DatePipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable, ReplaySubject, takeUntil, tap } from "rxjs";
import { SchedulingService } from "../../../../services/scheduling.service";
import { Schedule } from "../../interfaces/schedule.interface";
import { SchedulingFilterForm } from "./interfaces/scheduling-filter-form.interface";

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
  providers: [DatePipe]
})
export class SchedulesComponent implements OnInit, OnDestroy {
  destroy$ = new ReplaySubject(1);

  id!: string;
  form!: FormGroup<SchedulingFilterForm>;
  items$!: Observable<Schedule[]>;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private schedulingService: SchedulingService,
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.fillId();
    this.buildForm();
  }

  fillId(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  buildForm(): void {
    this.form = this.fb.group({
      date: new FormControl(this.datePipe.transform(new Date(), 'yyyy-MM-dd'))
    });

    this.form.valueChanges.pipe(
      takeUntil(this.destroy$),
      tap(({ date }) => this.onChangeDate(date!))
    ).subscribe();

    this.onChangeDate(this.form.value.date!);
  }

  onChangeDate(date: string): void {
    this.items$ = this.schedulingService.getSchedulesOfDay(this.id, date);
  }
}

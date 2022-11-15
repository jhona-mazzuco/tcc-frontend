import { state, style, trigger } from "@angular/animations";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { GENERIC_ERROR_MESSAGE } from "@shared/constants/generic-error-message.constant";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, Observable, of, ReplaySubject, takeUntil, tap } from "rxjs";
import { SchedulingService } from "../../../../services/scheduling.service";
import { FoodForm } from "./interfaces/food-form.interface";
import { SchedulingForm } from "./interfaces/scheduling-form.interface";
import { Scheduling } from "./interfaces/scheduling.interface";

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss'],
  animations: [
    trigger('expandAnimation', [
      state(
        'true',
        style({
          height: 'auto'
        })
      ),
      state(
        'false',
        style({
          height: '0'
        })
      ),
    ])
  ]
})
export class SchedulingComponent implements OnInit, OnDestroy {
  destroy$ = new ReplaySubject(1);
  form!: FormGroup<SchedulingForm>;
  hasFood = false;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: SchedulingService
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.checkIfHasCorrectlyParams();
    this.buildForm();
  }

  checkIfHasCorrectlyParams(): void {
    const { fieldId, date, hour } = this.activatedRoute.snapshot.queryParams;
    if (!fieldId || !date || !hour) {
      this.notification.warn('Não foi encontrado parâmetro suficiente para fazer o agendamento!');
      this.router.navigateByUrl('/horarios');
    }
  }

  buildForm(): void {
    this.form = this.fb.group<SchedulingForm>({
      fieldId: new FormControl(null, Validators.required),
      hour: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    });

    const queryParams = this.activatedRoute.snapshot.queryParams as any;
    this.form.patchValue({
      hour: Number.parseInt(queryParams.hour),
      ...queryParams
    });
    this.form.updateValueAndValidity();
  }

  onHasFoodChange() {
    if (this.hasFood) {
      this.form.addControl('food',
        this.fb.group<FoodForm>({
          peopleNumber: new FormControl(null, Validators.required),
          foodTypes: new FormControl(null, Validators.required),
          obs: new FormControl(null)
        })
      );
    } else {
      this.form.removeControl('food');
    }

    this.form.updateValueAndValidity();
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.service.scheduling(this.form.value as Scheduling)
        .pipe(
          takeUntil(this.destroy$),
          tap(({ message }) => this.onSchedulingSuccess(message)),
          catchError(({ error }) => this.onSchedulingError(error?.message))
        )
        .subscribe();
    }
  }

  onSchedulingSuccess(message: string): void {
    this.notification.success(message);
    this.router.navigateByUrl('/agendados');
  }

  onSchedulingError(message = GENERIC_ERROR_MESSAGE): Observable<null> {
    this.notification.error(message);
    return of(null);
  }
}

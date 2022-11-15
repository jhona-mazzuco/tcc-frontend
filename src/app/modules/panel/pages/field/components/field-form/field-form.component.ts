import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Field } from "@shared/interfaces/field.interface";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { TransformValueToLabelPipe } from "@shared/pipes/transform-value-to-label.pipe";
import * as moment from "moment";
import { debounceTime, takeUntil, tap } from "rxjs";
import { FieldConfigForm } from "../../interfaces/field-config-form.interface";
import { FieldForm } from "../../interfaces/field-form.interface";

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.scss'],
  providers: [TransformValueToLabelPipe]
})
export class FieldFormComponent extends BaseComponent implements OnInit, OnDestroy {
  @Output() onSubmit = new EventEmitter();

  @Input() submitting!: boolean;
  @Input() patchValue!: Partial<Field>;

  form!: FormGroup<FieldForm>;
  ignoredHourSuggestion!: number[];
  firstChange: boolean = true;

  constructor(
    private fb: NonNullableFormBuilder,
    private pipe: TransformValueToLabelPipe,
    notification: NotificationService
  ) {
    super(notification);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group<FieldForm>({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      config: this.fb.group<FieldConfigForm>({
        price: new FormControl(0, [Validators.required, Validators.min(1)]),
        startAt: new FormControl(8 * 60, Validators.required),
        duration: new FormControl(60, Validators.required),
        ignoredHours: new FormControl(null)
      })
    });

    if (this.patchValue) {
      this.form.patchValue(this.patchValue);
      this.form.updateValueAndValidity();
    }

    this.listenStartAtOrDurationChanges();
  }

  listenStartAtOrDurationChanges(): void {
    const configForm = this.form.get('config')!;
    configForm.get('startAt')!.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap((value) => this.generateIgnoredHours(value!, configForm.get('duration')!.value!))
      ).subscribe();

    configForm.get('duration')!.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(650),
        tap((value) => this.generateIgnoredHours(configForm.get('startAt')!.value!, value!))
      ).subscribe();

    const { startAt, duration } = this.form.get('config')!.value;
    this.generateIgnoredHours(startAt!, duration!);
  }

  generateIgnoredHours(startAt: number, duration: number): void {
    if (!this.firstChange) {
      this.form.get('config.ignoredHours')!.setValue(null);
    }

    this.ignoredHourSuggestion = [];
    const initialDay = 1;
    let date = moment(`2020-01-${ initialDay } ${ this.pipe.transform(startAt!) }`);
    do {
      if (this.ignoredHourSuggestion.length) {
        this.ignoredHourSuggestion.push(this.ignoredHourSuggestion[this.ignoredHourSuggestion.length - 1] + duration!);
      } else {
        this.ignoredHourSuggestion.push(startAt!);
      }

      date.add(duration!, 'minute');
    } while (date.date() === initialDay);

    this.firstChange = false;
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value)
    }
  }
}

import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
// @ts-ignore
import * as _moment from "moment";
import { default as _rollupMoment, Moment } from "moment";

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-day-select-bar',
  templateUrl: './day-select-bar.component.html',
  styleUrls: ['./day-select-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DaySelectBarComponent),
      multi: true
    },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class DaySelectBarComponent implements ControlValueAccessor {
  date!: Moment;

  onChange = (date: string) => {
  };

  onTouched = () => {
  };

  registerOnChange(fn: (date: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(date: Moment | string | Date): void {
    const transformedDate = moment(date);
    this.date = transformedDate;
    this.onChange(transformedDate.format('YYYY-MM-DD'));
  }

  next(): void {
    this.date.add(1, 'day');
    this.writeValue(this.date);
  }

  previous(): void {
    this.date.add(-1, 'day');
    this.writeValue(this.date);
  }
}

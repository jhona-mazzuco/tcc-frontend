import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from "@angular/forms";
import * as moment from "moment";
import { IgnoredHour } from "../../interfaces/ignored-hour.interface";

@Component({
  selector: 'app-ignored-hours-input',
  templateUrl: './ignored-hours-input.component.html',
  styleUrls: ['./ignored-hours-input.component.scss'],
})
export class IgnoredHoursInputComponent implements ControlValueAccessor, OnInit {
  @Input() suggestions!: number[];
  disabled!: boolean;
  days: string[] = [];

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (ngControl != null) {
      ngControl.valueAccessor = this;
    }
  }

  onChange = (value: IgnoredHour[]) => {
  };

  onTouched = () => {
  };

  ngOnInit(): void {
    this.fillDays();
  }

  fillDays(): void {
    for (let i = 1; i <= 7; i++) {
      this.days.push(moment().day(i).locale('PT-BR').format('dddd'));
    }
  }

  registerOnChange(fn: (value: IgnoredHour[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: IgnoredHour | IgnoredHour[]): void {
    if (!value) return;

    if (Array.isArray(value)) {
      this.onChange(value);
      return;
    }

    const idx = this.indexOfIgnoredHour(value);
    if (idx !== -1) {
      this.ngControl.value.splice(idx, 1);
    } else {
      if (this.ngControl.value?.length) {
        this.ngControl.value.push(value);
      } else {
        this.onChange([value]);
        return;
      }
    }

    this.onChange(this.ngControl.value);
  }

  indexOfIgnoredHour(value: IgnoredHour): number {
    let idx = -1;
    (this.ngControl.value as IgnoredHour[])?.filter((ignoredHour, index) => {
      const isEqual = ignoredHour.hour === value.hour && ignoredHour.day === value.day;
      if (isEqual && idx === -1) {
        idx = index;
      }

      return isEqual;
    });

    return idx;
  }
}

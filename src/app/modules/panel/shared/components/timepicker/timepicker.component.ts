import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { TimepickerInputOption } from "./types/timepicker-input-option";

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimepickerComponent),
      multi: true
    }
  ]
})
export class TimepickerComponent implements ControlValueAccessor {
  hour: number = 0;
  minute: number = 0;
  disabled!: boolean
  firstChange = true;

  onChange = (value: number) => {
  };

  onTouched = () => {
  };

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value?: number): void {
    if (value && this.firstChange) {
      this.firstChange = false;
      this.hour = Math.floor(value / 60);
      this.minute = value % 60;
    }

    this.onChange((this.hour * 60) + this.minute);
  }

  increment(type: TimepickerInputOption, iptMinute: HTMLInputElement) {
    this.onTouched();
    if (Number.parseInt(iptMinute.max) === (type === 'hour' ? this.hour : this.minute)) {
      return;
    }

    if (type === 'hour') {
      this.hour += 1;
    } else {
      this.minute += 1;
    }

    this.writeValue();
  }

  decrement(type: TimepickerInputOption, iptMinute: HTMLInputElement) {
    this.onTouched();
    if (Number.parseInt(iptMinute.min) === (type === 'hour' ? this.hour : this.minute)) {
      return;
    }

    if (type === 'hour') {
      this.hour -= 1;
    } else {
      this.minute -= 1;
    }

    this.writeValue();
  }
}

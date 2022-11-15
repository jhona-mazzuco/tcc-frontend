import { Component, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { FOOD_TYPES_OPTIONS } from "./constants/food-types-options.constant";

@Component({
  selector: 'app-food-types',
  templateUrl: './food-types.component.html',
  styleUrls: ['./food-types.component.scss']
})
export class FoodTypesComponent implements ControlValueAccessor {
  disabled!: boolean;
  foodTypes = FOOD_TYPES_OPTIONS;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (ngControl != null) {
      ngControl.valueAccessor = this;
    }
  }

  onChange = (value: string[] | null) => {
  };

  onTouched = () => {
  };

  registerOnChange(fn: (value: string[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string | string[]): void {
    if (!value) return;

    if (Array.isArray(value)) {
      this.onChange(value);
      return;
    }

    const idx = this.findIndex(value);
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

    this.onChange(this.ngControl.value?.length ? this.ngControl.value : null);
  }

  findIndex(value: string): number {
    return (this.ngControl?.value as string[])?.findIndex(row => value == row) ?? -1;
  }
}

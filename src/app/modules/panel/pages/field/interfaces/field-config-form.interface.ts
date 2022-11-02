import { FormControl } from "@angular/forms";
import { IgnoredHour } from "./ignored-hour.interface";

export interface FieldConfigForm {
  startAt: FormControl<number | null>;
  duration: FormControl<number | null>;
  ignoredHours: FormControl<IgnoredHour[] | null>;
}

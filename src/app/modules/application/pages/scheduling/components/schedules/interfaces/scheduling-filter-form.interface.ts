import { FormControl } from "@angular/forms";

export interface SchedulingFilterForm {
  date: FormControl<string | null>;
}

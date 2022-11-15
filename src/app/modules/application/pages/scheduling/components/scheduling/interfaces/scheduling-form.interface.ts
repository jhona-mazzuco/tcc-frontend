import { FormControl, FormGroup } from "@angular/forms";
import { FoodForm } from "./food-form.interface";

export interface SchedulingForm {
  fieldId: FormControl<string | null>;
  date: FormControl<string | null>;
  hour: FormControl<number | null>;
  food?: FormGroup<FoodForm>;
}

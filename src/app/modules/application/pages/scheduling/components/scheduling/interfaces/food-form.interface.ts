import { FormControl } from "@angular/forms";

export interface FoodForm {
  peopleNumber: FormControl<number | null>;
  foodTypes: FormControl<string[] | null>;
  obs: FormControl<string | null>;
}

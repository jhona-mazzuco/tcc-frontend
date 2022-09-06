import { FormControl } from "@angular/forms";

export interface FieldForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
}

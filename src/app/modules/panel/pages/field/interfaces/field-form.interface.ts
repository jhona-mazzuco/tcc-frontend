import { FormControl, FormGroup } from "@angular/forms";
import { FieldConfigForm } from "./field-config-form.interface";

export interface FieldForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  config: FormGroup<FieldConfigForm>;
}

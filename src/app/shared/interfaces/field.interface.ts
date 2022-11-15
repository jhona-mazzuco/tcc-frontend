import { FieldConfig } from "./field-config.interface";

export interface Field {
  name: string;
  description: string;
  config: FieldConfig;
}

import { IgnoredHour } from "../../modules/panel/pages/field/interfaces/ignored-hour.interface";

export interface FieldConfig {
  price: number;
  startAt: number;
  duration: number;
  ignoredHours: IgnoredHour[] | null;
}

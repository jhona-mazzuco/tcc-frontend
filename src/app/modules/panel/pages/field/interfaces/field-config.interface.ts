import { IgnoredHour } from "./ignored-hour.interface";

export interface FieldConfig {
  startAt: number;
  duration: number;
  ignoredHours: IgnoredHour[] | null;
}

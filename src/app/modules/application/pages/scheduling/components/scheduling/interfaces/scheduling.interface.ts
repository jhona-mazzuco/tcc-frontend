import { Food } from "./food.interface";

export interface Scheduling {
  fieldId: string;
  date: string;
  hour: number;
  food: Food;
}

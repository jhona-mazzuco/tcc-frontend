import { Pipe, PipeTransform } from '@angular/core';
import { Time } from "../interfaces/time.interface";

@Pipe({
  name: 'transformValueToTime'
})
export class TransformValueToTimePipe implements PipeTransform {
  transform(value: number): Time {
    return {
      hour: value / 60,
      minute: value % 60
    };
  }
}

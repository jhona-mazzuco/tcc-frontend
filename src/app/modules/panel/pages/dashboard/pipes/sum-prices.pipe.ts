import { Pipe, PipeTransform } from '@angular/core';
import { Schedule } from "../interfaces/schedule.interface";

@Pipe({
  name: 'sumPrices'
})
export class SumPricesPipe implements PipeTransform {

  transform(schedules: Schedule[]): number {
    return schedules
      .map(({ price }) => price)
      .reduce(
        (previousValue, currentValue) => currentValue + previousValue,
        0
      );
  }

}

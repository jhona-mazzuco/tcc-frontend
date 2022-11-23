import { Pipe, PipeTransform } from '@angular/core';
import { Schedule } from "../interfaces/schedule.interface";

@Pipe({
  name: 'sumFoodToMake'
})
export class SumFoodToMakePipe implements PipeTransform {

  transform(schedules: Schedule[]): number {
    return schedules.filter(({ hasFood }) => hasFood)?.length ?? 0;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { STATUS_TRANSLATE } from "../constants/status-translate.constant";

@Pipe({
  name: 'translateStatus'
})
export class TranslateStatusPipe implements PipeTransform {

  transform(value: string): string {
    // @ts-ignore
    return STATUS_TRANSLATE[value];
  }

}

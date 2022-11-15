import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformValueToLabel',
  standalone: true
})
export class TransformValueToLabelPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) return '';
    let hour = Math.floor(value / 60).toLocaleString('pt-br', { minimumIntegerDigits: 2 });
    let minute = Math.floor(value % 60).toLocaleString('pt-br', { minimumIntegerDigits: 2 });
    return `${ hour }:${ minute }`;
  }
}

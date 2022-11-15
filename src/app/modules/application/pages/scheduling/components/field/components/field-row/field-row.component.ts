import { Component, Input } from '@angular/core';
import { FieldRowData } from "../../interfaces/field-row-data.interface";

@Component({
  selector: 'app-field-row',
  templateUrl: './field-row.component.html',
  styleUrls: ['./field-row.component.scss']
})
export class FieldRowComponent {
  @Input() row!: FieldRowData;
}

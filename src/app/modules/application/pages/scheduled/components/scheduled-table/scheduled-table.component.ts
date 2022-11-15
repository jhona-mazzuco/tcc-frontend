import { Component, Input, OnInit } from '@angular/core';
import { TABLE_COLUMNS } from "../../constants/table-columns.constant";
import { Obligation } from "../../interfaces/obligation.interface";

@Component({
  selector: 'app-scheduled-table',
  templateUrl: './scheduled-table.component.html',
  styleUrls: ['./scheduled-table.component.scss'],
})
export class ScheduledTableComponent implements OnInit {
  @Input() rows!: Obligation[];
  displayedColumns = TABLE_COLUMNS;

  constructor() {
  }

  ngOnInit(): void {
  }

}

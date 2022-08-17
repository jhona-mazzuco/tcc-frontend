import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USER_TABLE_HEADER_COLUMNS } from "../../constants/user-table-header-columns.constant";
import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() users!: User[];
  @Output() reloadItems = new EventEmitter();

  headerColumns = USER_TABLE_HEADER_COLUMNS;
}

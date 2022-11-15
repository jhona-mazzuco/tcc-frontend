import { Component, OnInit } from '@angular/core';
import { GENERIC_ERROR_MESSAGE } from "@shared/constants/generic-error-message.constant";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, Observable, of } from "rxjs";
import { ResponseMessage } from "../../../../../panel/shared/interfaces/response-message.interface";
import { FieldService } from "../../services/field.service";
import { FieldRowData } from "./interfaces/field-row-data.interface";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  items$!: Observable<FieldRowData[] | null>

  constructor(private service: FieldService, private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.items$ = this.service.fetch()
      .pipe(catchError(this.catchError.bind(this)));
  }

  catchError({ message }: ResponseMessage): Observable<null> {
    this.notification.error(message ?? GENERIC_ERROR_MESSAGE);
    return of(null);
  }
}

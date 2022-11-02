import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, Observable, takeUntil, tap } from "rxjs";
import { FIELD_HEADER_COLUMNS } from "../../constants/field-header-columns.constant";
import { Field } from "../../interfaces/field.interface";
import { FieldService } from "../../services/field.service";

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent extends BaseComponent implements OnInit, OnDestroy {
  displayedColumns = FIELD_HEADER_COLUMNS;
  dataSource$!: Observable<Field[] | null>;
  loading!: boolean;

  constructor(
    private service: FieldService,
    notification: NotificationService
  ) {
    super(notification);
  }

  ngOnInit(): void {
    this.fetchFields();
  }

  fetchFields(): void {
    this.dataSource$ = this.service.fetchFields()
      .pipe(catchError(this.catchError.bind(this)));
  }

  remove(id: string): void {
    this.service.remove(id)
      .pipe(
        takeUntil(this.destroy$),
        tap(this.onRemoveSuccess.bind(this)),
        catchError(this.catchError.bind(this))
      )
      .subscribe();
  }

  onRemoveSuccess(): void {
    this.notification.success('Campo removido com sucesso!');
    this.fetchFields();
  }
}

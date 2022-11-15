import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, finalize, takeUntil, tap } from "rxjs";
import { Field } from "@shared/interfaces/field.interface";
import { FieldService } from "../../services/field.service";

@Component({
  selector: 'app-field-create',
  templateUrl: './field-create.component.html',
  styleUrls: ['./field-create.component.scss']
})
export class FieldCreateComponent extends BaseComponent implements OnDestroy {
  loading!: boolean;

  constructor(
    private service: FieldService,
    private router: Router,
    notification: NotificationService
  ) {
    super(notification);
  }

  save(field: Field) {
    this.loading = true;
    this.service.create(field)
      .pipe(
        takeUntil(this.destroy$),
        tap(({ id }) => this.router.navigateByUrl(`/painel/campos`)),
        catchError(() => this.catchError()),
        finalize(() => this.loading = false)
      ).subscribe();
  }
}

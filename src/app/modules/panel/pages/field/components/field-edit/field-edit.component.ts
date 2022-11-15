import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Field } from "@shared/interfaces/field.interface";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, finalize, takeUntil, tap } from "rxjs";
import { EDIT_FIELD_LOADING } from "../../constants/edit-field-loading.constant";
import { FieldService } from "../../services/field.service";

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss']
})
export class FieldEditComponent extends BaseComponent implements OnInit, OnDestroy {
  loading = EDIT_FIELD_LOADING;
  id!: string;
  field!: Field;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: FieldService,
    private router: Router,
    notification: NotificationService
  ) {
    super(notification);
  }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.loading.FETCH = true;
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.service.findById(this.id)
      .pipe(
        takeUntil(this.destroy$),
        tap((data) => this.field = data),
        catchError(this.catchError.bind(this)),
        finalize(() => this.loading.FETCH = false)
      )
      .subscribe();
  }

  save(data: Field) {
    this.loading.SUBMIT = true;
    this.service.update(this.id, data)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.router.navigateByUrl('/painel/campos')),
        catchError(this.catchError.bind(this))
      )
      .subscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize, ReplaySubject, tap } from "rxjs";
import { EDIT_FIELD_LOADING } from "../../constants/edit-field-loading.constant";
import { Field } from "../../interfaces/field.interface";

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss']
})
export class FieldEditComponent implements OnInit, OnDestroy {
  loading = EDIT_FIELD_LOADING;
  destroy$ = new ReplaySubject(1);
  id!: string;
  field!: Field;

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.loading.FETCH = true;
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.firestore.doc(`fields/${ this.id }`).get().pipe(
      tap(data => this.field = data.data() as Field),
      finalize(() => this.loading.FETCH = false)
    ).subscribe();
  }

  save(data: Field) {
    this.loading.SUBMIT = true;
    this.firestore.doc(`fields/${ this.id }`)
      .update(data)
      .then(() => this.router.navigateByUrl(`painel/campos/${ this.id }/detalhes`))
      .catch(() => this.loading.SUBMIT = false);
  }
}

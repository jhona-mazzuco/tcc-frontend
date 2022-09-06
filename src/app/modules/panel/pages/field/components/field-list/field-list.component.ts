import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { map, Observable, ReplaySubject, takeUntil, tap } from "rxjs";
import { FIELD_HEADER_COLUMNS } from "../../constants/field-header-columns.constant";
import { IMAGES_STORAGE_KEY } from "../../constants/images-storage-key.constant";
import { Field } from "../../interfaces/field.interface";

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit, OnDestroy {
  displayedColumns = FIELD_HEADER_COLUMNS;
  dataSource$!: Observable<Field[]>;
  destroy$ = new ReplaySubject(1);

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.fetchFields();
  }

  fetchFields(): void {
    this.dataSource$ = this.firestore
      .collection('fields')
      .valueChanges({ idField: 'id' }) as Observable<Field[]>;
  }

  remove(id: string): void {
    this.firestore.doc(`fields/${ id }`)
      .delete()
      .then(() => this.storage.ref(`${ IMAGES_STORAGE_KEY }/${ id }`)
        .list()
        .pipe(
          takeUntil(this.destroy$),
          map(references => references.items),
          tap((items) => items.forEach(async (i) => await i.delete()))
        )
        .subscribe()
      )
  }
}

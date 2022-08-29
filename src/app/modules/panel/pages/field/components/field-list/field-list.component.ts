import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from "@angular/fire/compat/firestore";
import { Observable, tap } from "rxjs";
import { FIELD_HEADER_COLUMNS } from "../../constants/field-header-columns.constant";
import { Field } from "../../interfaces/field.interface";

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  displayedColumns = FIELD_HEADER_COLUMNS;
  dataSource$!: Observable<QuerySnapshot<Field>>;

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.fetchFields();
  }

  fetchFields(): void {
    // @ts-ignore
    this.dataSource$ = this.firestore
      .collection('fields')
      .get();
  }

  remove(id: string): void {
    this.dataSource$
      .pipe(tap(data => {
      }))
      .subscribe();
  }
}

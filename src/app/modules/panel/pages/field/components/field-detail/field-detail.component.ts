import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Observable, ReplaySubject, Subject, takeUntil, tap } from "rxjs";
import { Field } from "../../interfaces/field.interface";
import { FieldImageUploadComponent } from "../field-image-upload/field-image-upload.component";

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.scss']
})
export class FieldDetailComponent implements OnInit, OnDestroy {
  id!: string;
  destroy$ = new ReplaySubject(1);
  dataSource$!: Observable<Field>;
  refresh$ = new Subject<void>();

  constructor(
    private firestore: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private storage: AngularFireStorage,
    private dialog: MatDialog
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
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.dataSource$ = this.firestore.doc(`fields/${ this.id }`).valueChanges({ idField: 'id' }) as Observable<Field>;
  }

  openUploadModal(): void {
    const ref = this.dialog.open(FieldImageUploadComponent);
    ref.componentInstance.id = this.id;
    ref.componentInstance.onUploaded.pipe(
      takeUntil(this.destroy$),
      tap(() => {
        ref.close();
        this.refresh$.next();
      }),
    ).subscribe();
  }
}

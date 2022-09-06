import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Reference } from "@angular/fire/compat/storage/interfaces";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import firebase from "firebase/compat/app";
import { finalize, ReplaySubject, Subject, switchMap, takeUntil, tap } from "rxjs";
import { PreviewModalService } from "../../../../shared/components/preview-modal/services/preview-modal.service";
import { IMAGES_STORAGE_KEY } from "../../constants/images-storage-key.constant";
import { FILE_TABLE_COLUMNS } from "./constant/file-table-columns.constant";

@Component({
  selector: 'app-field-file-table',
  templateUrl: './field-file-table.component.html',
  styleUrls: ['./field-file-table.component.scss'],
})
export class FieldFileTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() id!: string;
  @Input() refresh$!: Subject<void>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  destroy$ = new ReplaySubject(1);
  dataSource = new MatTableDataSource<Reference>();
  displayedColumns = FILE_TABLE_COLUMNS;
  page = 0;
  loading = false;

  constructor(
    private storage: AngularFireStorage,
    private preview: PreviewModalService,
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.fetchFiles();
    this.listenRefresh();
  }

  openPreviewModal(src: string): void {
    this.preview.open(src);
  }

  fetchFiles(): void {
    this.loading = true;
    this.storage.ref(`${ IMAGES_STORAGE_KEY }/${ this.id }`)
      .list()
      .pipe(
        takeUntil(this.destroy$),
        tap(this.onFetchSuccess.bind(this)),
        finalize(() => {
          this.loading = false
        })
      ).subscribe();
  }

  listenRefresh(): void {
    this.refresh$
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => this.storage.ref(`${ IMAGES_STORAGE_KEY }/${ this.id }`).list()),
        tap(this.onFetchSuccess.bind(this))
      )
      .subscribe();
  }

  onFetchSuccess({ items }: firebase.storage.ListResult): void {
    this.dataSource = new MatTableDataSource(items);
    this.dataSource.paginator = this.paginator;
  }

  delete(ref: string): void {
    this.storage.ref(ref)
      .delete()
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.refresh$.next())
      )
      .subscribe();
  }
}

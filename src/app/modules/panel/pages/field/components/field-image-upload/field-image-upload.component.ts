import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { ReplaySubject, takeUntil, tap } from "rxjs";
import { IMAGES_STORAGE_KEY } from "../../constants/images-storage-key.constant";

@Component({
  selector: 'app-field-image-upload',
  templateUrl: './field-image-upload.component.html',
  styleUrls: ['./field-image-upload.component.scss']
})
export class FieldImageUploadComponent implements OnDestroy {
  @Output() onUploaded = new EventEmitter<void>();
  @Input() id!: string;

  destroy$ = new ReplaySubject(1);

  percentageUpload!: number;
  selectFile!: File;

  constructor(private storage: AngularFireStorage) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onFileChange(ipt: HTMLInputElement) {
    this.selectFile = ipt.files![0];
    ipt.value = '';
  }

  upload(): void {
    const task = this.storage.upload(`${ IMAGES_STORAGE_KEY }/${ this.id }/${ this.selectFile.name }`, this.selectFile);

    task.then(() => this.onUploaded.next());

    task.percentageChanges()
      .pipe(
        takeUntil(this.destroy$),
        tap(percent => this.percentageUpload = percent ?? 0)
      ).subscribe();
  }
}

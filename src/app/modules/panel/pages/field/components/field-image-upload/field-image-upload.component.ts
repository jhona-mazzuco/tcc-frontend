import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { MatDialogRef } from "@angular/material/dialog";
import { ReplaySubject, takeUntil, tap } from "rxjs";
import { AuthService } from "../../../../core/authentication/services/auth.service";

@Component({
  selector: 'app-field-image-upload',
  templateUrl: './field-image-upload.component.html',
  styleUrls: ['./field-image-upload.component.scss']
})
export class FieldImageUploadComponent implements OnDestroy {
  @Output() onUploaded = new EventEmitter();

  destroy$ = new ReplaySubject(1);

  percentageUpload!: number;
  selectFile!: File;

  constructor(private storage: AngularFireStorage, private ref: MatDialogRef<FieldImageUploadComponent>, private auth: AuthService) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onFileChange(ipt: HTMLInputElement) {
    debugger;
    this.selectFile = ipt.files![0];
    ipt.value = '';
  }

  upload(): void {
    this.auth.currentUser
      .pipe(
      tap(currentUser => {
        const task = this.storage.upload(`field_image/${currentUser?.uid}/${ this.selectFile.name }`, this.selectFile);

        task.then(() => this.onUploaded.next(this.selectFile));

        task.percentageChanges()
          .pipe(
            takeUntil(this.destroy$),
            tap(percent => this.percentageUpload = percent ?? 0)
          ).subscribe();
      })
    ).subscribe();
  }
}

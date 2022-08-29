import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ReplaySubject, takeUntil, tap } from "rxjs";
import { FieldImageUploadComponent } from "../field-image-upload/field-image-upload.component";
import { FILE_TABLE_COLUMNS } from "./constant/file-table-columns.constant";

@Component({
  selector: 'app-field-file-table',
  templateUrl: './field-file-table.component.html',
  styleUrls: ['./field-file-table.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldFileTableComponent),
      multi: true
    }
  ]
})
export class FieldFileTableComponent implements ControlValueAccessor {
  destroy$ = new ReplaySubject(1);

  files: File[] = [];
  displayedColumns = FILE_TABLE_COLUMNS;
  disabled = false;

  onChange = (files: string[]) => {};
  onTouched = () => {};

  constructor(private dialog: MatDialog) { }


  registerOnChange(fn: (files: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    console.log(obj);
  }

  openUploadModal(): void {
    const ref = this.dialog.open(FieldImageUploadComponent);
    ref.componentInstance.onUploaded.pipe(
      takeUntil(this.destroy$),
      tap(file => {
        this.files.push(file);
        ref.close();
      }),
    ).subscribe();
  }
}

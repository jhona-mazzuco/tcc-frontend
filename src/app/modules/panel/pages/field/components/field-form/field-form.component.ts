import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { FieldForm } from "../../interfaces/field-form.interface";
import { Field } from "../../interfaces/field.interface";

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.scss']
})
export class FieldFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  @Input() submitting!: boolean;
  @Input() patchValue!: Partial<Field>;

  form!: FormGroup<FieldForm>;

  constructor(private fb: NonNullableFormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group<FieldForm>({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });

    if (this.patchValue) {
      this.form.patchValue(this.patchValue);
      this.form.updateValueAndValidity();
    }
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value)
    }
  }
}

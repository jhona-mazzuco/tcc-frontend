import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { GENERIC_ERROR_MESSAGE } from "../../../../shared/constants/generic-error-message.constant";
import { Field } from "../../interfaces/field.interface";

@Component({
  selector: 'app-field-create',
  templateUrl: './field-create.component.html',
  styleUrls: ['./field-create.component.scss']
})
export class FieldCreateComponent {
  loading!: boolean;
  fields!: AngularFirestoreCollection<Field>;

  constructor(private firestore: AngularFirestore, private router: Router, private snackbar: MatSnackBar) {
    this.fields = this.firestore.collection<Field>('fields');
  }

  save(field: Field) {
    this.loading = true;
    this.fields.add(field)
      .then(({ id }) => this.router.navigateByUrl(`/painel/campos/${ id }/detalhes`))
      .catch(() => {
        this.snackbar.open(GENERIC_ERROR_MESSAGE);
      })
      .finally(() => this.loading = false);
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificationService } from "@shared/notification/notification.service";
import { CurrentUserService } from "@shared/services/current-user.service";
import { ERRORS_MESSAGE } from "../../constants/errors-message.constant";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  loading!: boolean;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private notification: NotificationService,
    private router: Router,
    private currentUser: CurrentUserService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      passwordConfirm: [null, Validators.required],
    })
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.submit();
    }
  }

  async submit(): Promise<void> {
    const { email, password, passwordConfirm } = this.form.value;
    if (password !== passwordConfirm) {
      this.notification.error('Senhas inseridas devem ser iguais!');
      return;
    }

    this.loading = true;
    this.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.currentUser.saveUser({ token: userCredential.user?.uid!, email: email });
        this.router.navigateByUrl('/horarios');
      })
      .catch(({ code }) => this.notification.error(ERRORS_MESSAGE.get(code)))
      .finally(() => this.loading = false);
  }

  changeVisibility(el: HTMLInputElement) {
    el.type = el.type === 'text' ? 'password' : 'text';
  }
}

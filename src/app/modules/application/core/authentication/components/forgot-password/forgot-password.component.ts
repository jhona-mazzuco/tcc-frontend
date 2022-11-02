import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NotificationService } from "@shared/notification/notification.service";
import { FEEDBACK_MESSAGES } from "./constants/feedback-messages.constant";
import { ForgotPasswordForm } from "./interfaces/forgot-password-form.interface";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form!: FormGroup<ForgotPasswordForm>;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private notification: NotificationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group<ForgotPasswordForm>({
      email: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { email } = this.form.value;
      this.auth.sendPasswordResetEmail(email!)
        .then(this.handleSuccess.bind(this))
        .catch(this.handleError.bind(this));
    }
  }

  handleSuccess(): void {
    this.notification.success(FEEDBACK_MESSAGES.SEND_EMAIL_SUCCESS);
    this.router.navigateByUrl('/login');
  }

  handleError(): void {
    this.notification.error(FEEDBACK_MESSAGES.SEND_EMAIL_ERROR);
    this.form.reset();
  }
}

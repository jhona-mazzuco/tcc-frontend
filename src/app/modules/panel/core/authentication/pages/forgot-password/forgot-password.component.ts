import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, finalize, of, takeUntil, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { INVALID_EMAIL } from "../login/constants/invalid-email.constant";
import { FEEDBACK_MESSAGES } from "./constant/feedback-messages.constant";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends BaseComponent implements OnInit {
  form!: UntypedFormGroup;
  loading!: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private service: AuthService,
    private router: Router,
    notification: NotificationService
  ) {
    super(notification);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.send();
    }
  }

  send(): void {
    this.loading = true;
    const { email } = this.form.value;
    this.service.passwordRecovery(email)
      .pipe(
        takeUntil(this.destroy$),
        tap(this.onSendSuccess.bind(this)),
        catchError(({ code }) => this.onSendError(code)),
        finalize(() => this.loading = false)
      ).subscribe();
  }

  onSendSuccess(): void {
    this.notification.success(FEEDBACK_MESSAGES.SUCCESS)
    this.router.navigateByUrl('painel/login');
  }

  onSendError(code: string) {
    if (code == INVALID_EMAIL) {
      this.notification.success(FEEDBACK_MESSAGES.SUCCESS);
    } else {
      this.notification.error(FEEDBACK_MESSAGES.ERROR);
    }

    return of(null);
  }
}

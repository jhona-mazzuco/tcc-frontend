import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserAuthenticated } from "@shared/interfaces/user-authenticated.interface";
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { CurrentUserService } from "@shared/services/current-user.service";
import { catchError, finalize, takeUntil, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { FEEDBACK_MESSAGES } from "./constants/feedback-messages.constant";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  form!: UntypedFormGroup;
  loading!: boolean;

  constructor(
    private fb: UntypedFormBuilder,
    private service: AuthService,
    private currentUserService: CurrentUserService,
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
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.signIn();
    }
  }

  signIn(): void {
    this.loading = true;
    const { email, password } = this.form.value;
    this.service.signIn(email, password)
      .pipe(
        takeUntil(this.destroy$),
        tap(this.onSignInSuccess.bind(this)),
        catchError(() => this.catchError(FEEDBACK_MESSAGES.EMAIL_OR_PASSWORD_WRONG)),
        finalize(() => this.loading = false)
      ).subscribe();
  }

  onSignInSuccess(data: UserAuthenticated): void {
    this.currentUserService.saveUser(data);
    this.router.navigateByUrl('/painel');
  }
}

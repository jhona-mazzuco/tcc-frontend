import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService } from "@shared/notification/notification.service";
import { CurrentUserService } from "@shared/services/current-user.service";
import { AUTHENTICATION_MESSAGE_RESPONSE } from "../../constants/authentication-message-response.constant";
import { SOCIAL_MEDIA_PROVIDERS } from "../../constants/social-media-providers.constant";
import { LoginForm } from "./interfaces/login-form.interface";
import { SocialMediaProvider } from "./types/social-media-provider.type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup<LoginForm>;

  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private notification: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private currentUserService: CurrentUserService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group<LoginForm>({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.auth.signInWithEmailAndPassword(email!, password!)
        .then(this.onSignInSuccess.bind(this))
        .catch(() => this.notification.error(AUTHENTICATION_MESSAGE_RESPONSE.EMAIL_PASSWORD_ERROR));
    }
  }

  signInWithSocialMedia(provider: SocialMediaProvider): void {
    this.auth.signInWithPopup(SOCIAL_MEDIA_PROVIDERS[provider])
      .then(this.onSignInSuccess.bind(this))
      .catch(() => this.notification.error(AUTHENTICATION_MESSAGE_RESPONSE.SOCIAL_MEDIA_AUTH_ERROR));
  }

  async onSignInSuccess(): Promise<void> {
    const user = await this.auth.currentUser;
    this.currentUserService.saveUser({ email: user!.email!, token: user!.uid });
    const { oldUrl } = this.activatedRoute.snapshot.queryParams;
    if (oldUrl) {
      this.router.navigateByUrl(oldUrl);
    } else {
      this.router.navigateByUrl('/horarios');
    }
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NotificationModule } from "@shared/notification/notification.module";
import { AuthenticationRoutingModule } from "./authentication.routing";
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    AuthContainerComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NotificationModule,
    MatProgressSpinnerModule,
  ]
})
export class AuthenticationModule {
}

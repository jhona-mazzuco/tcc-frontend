import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NotificationService } from "../../../../shared/services/notification.service";
import { SendButtonModule } from "../../components/send-button/send-button.module";
import { AuthService } from "../../services/auth.service";
import { LoginComponent } from "./login.component";
import { LoginRouting } from "./login.routing";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    SendButtonModule,
    LoginRouting,
  ],
  providers: [AuthService, NotificationService]
})
export class LoginModule {

}

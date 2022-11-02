import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NotificationService } from "./notification.service";

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  providers: [NotificationService],
  exports: [MatSnackBarModule]
})
export class NotificationModule {
}

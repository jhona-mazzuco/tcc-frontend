import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { BASE_SNACKBAR_CONFIG } from "../constants/base-snackbar-config.constant";

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackbar: MatSnackBar) {
  }

  error(message: string): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, panelClass: ['snackbar-error'] })
  }

  success(message: string): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, panelClass: ['snackbar-success'] })
  }

  warn(message: string): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, panelClass: ['snackbar-warn'] })
  }

  info(message: string): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, panelClass: ['snackbar-info'] })
  }
}

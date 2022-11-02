import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { BASE_SNACKBAR_CONFIG } from "../constants/base-snackbar-config.constant";

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackbar: MatSnackBar) {
  }

  error(message: string, config?: MatSnackBarConfig): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, ...config, panelClass: ['snackbar-error'] });
  }

  success(message: string, config?: MatSnackBarConfig): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, ...config, panelClass: ['snackbar-success'] });
  }

  warn(message: string, config?: MatSnackBarConfig): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, ...config, panelClass: ['snackbar-warn'] });
  }

  info(message: string, config?: MatSnackBarConfig): void {
    this.snackbar.open(message, undefined, { ...BASE_SNACKBAR_CONFIG, ...config, panelClass: ['snackbar-info'] });
  }
}

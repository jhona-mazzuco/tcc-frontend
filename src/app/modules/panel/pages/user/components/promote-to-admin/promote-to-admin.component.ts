import { Component } from '@angular/core';
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, takeUntil, tap } from "rxjs";
import { ChangeRoleImplementation } from "../../interfaces/change-role-implementation.interface";
import { ChangeRoleComponent } from "../../models/change-role.directive";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-promote-to-admin',
  templateUrl: './promote-to-admin.component.html',
  styleUrls: ['./promote-to-admin.component.scss']
})
export class PromoteToAdminComponent extends ChangeRoleComponent implements ChangeRoleImplementation {
  constructor(private service: UserService, notification: NotificationService) {
    super(notification);
  }

  onClick() {
    this.service.promote(this.uid)
      .pipe(
        takeUntil(this.destroy$),
        tap(this.onChangeRoleSuccess.bind(this)),
        catchError(({ error }) => this.catchError(error.message))
      ).subscribe();
  }
}

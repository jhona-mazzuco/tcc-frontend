import { Component } from '@angular/core';
import { catchError, takeUntil, tap } from "rxjs";
import { NotificationService } from "../../../../shared/services/notification.service";
import { ChangeRoleImplementation } from "../../interfaces/change-role-implementation.interface";
import { ChangeRoleComponent } from "../../models/change-role.directive";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-demote-to-user',
  templateUrl: './demote-to-user.component.html',
  styleUrls: ['./demote-to-user.component.scss']
})
export class DemoteToUserComponent extends ChangeRoleComponent implements ChangeRoleImplementation {
  constructor(private service: UserService, notification: NotificationService) {
    super(notification);
  }

  onClick() {
    this.service.demote(this.uid)
      .pipe(
        takeUntil(this.destroy$),
        tap(this.onChangeRoleSuccess.bind(this)),
        catchError(this.catchError.bind(this))
      ).subscribe();
  }
}

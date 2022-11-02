import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, finalize, Observable, takeUntil, tap } from "rxjs";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseComponent implements OnInit, OnDestroy {
  users!: User[];
  loading!: boolean;
  hasError = false;

  constructor(private service: UserService, notification: NotificationService) {
    super(notification)
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.service.fetchUsers()
      .pipe(
        takeUntil(this.destroy$),
        tap(this.onSuccess.bind(this)),
        catchError(this.onFetchError.bind(this)),
        finalize(() => this.loading = false),
      ).subscribe();
  }

  onSuccess(users: User[]): void {
    this.hasError = false;
    this.users = users;
  }

  onFetchError(): Observable<null> {
    this.hasError = true;
    return this.catchError();
  }
}

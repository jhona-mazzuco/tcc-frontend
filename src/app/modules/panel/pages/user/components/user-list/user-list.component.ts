import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, finalize, Observable, of, ReplaySubject, takeUntil, tap } from "rxjs";
import { User } from "../../interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  destroy$ = new ReplaySubject(1);

  users!: User[];
  loading!: boolean;
  hasError = false;

  constructor(private service: UserService) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
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
        catchError(this.catchError.bind(this)),
        finalize(() => this.loading = false),
      ).subscribe();
  }

  onSuccess(users: User[]): void {
    this.hasError = false;
    this.users = users;
  }

  catchError(): Observable<null> {
    this.hasError = true;
    return of(null);
  }
}

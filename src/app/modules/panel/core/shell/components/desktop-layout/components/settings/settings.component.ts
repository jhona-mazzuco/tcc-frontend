import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import { filter, ReplaySubject, takeUntil, tap } from "rxjs";
import { AuthService } from "../../../../../authentication/services/auth.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  destroy$ = new ReplaySubject(1);
  currentUser!: firebase.User;

  constructor(private service: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchCurrentUser();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  fetchCurrentUser(): void {
    this.service.currentUser
      .pipe(
        takeUntil(this.destroy$),
        filter(user => !!user),
        tap(user => this.currentUser = user as firebase.User)
      )
      .subscribe();
  }

  logout(): void {
    this.service.logout()
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.router.navigateByUrl('/painel/login'))
      )
      .subscribe();
  }
}

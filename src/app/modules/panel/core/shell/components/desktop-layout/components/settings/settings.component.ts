import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserAuthenticated } from "@shared/interfaces/user-authenticated.interface";
import { CurrentUserService } from "@shared/services/current-user.service";
import { ReplaySubject } from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  destroy$ = new ReplaySubject(1);
  currentUser!: UserAuthenticated;

  constructor(private service: CurrentUserService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchCurrentUser();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  fetchCurrentUser(): void {
    this.currentUser = this.service.currentUser!;
  }

  logout(): void {
    this.service.removeUser();
    this.router.navigateByUrl('/painel/login');
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { UserAuthenticated } from "@shared/interfaces/user-authenticated.interface";
import { CurrentUserService } from "@shared/services/current-user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser!: UserAuthenticated | null;

  constructor(
    private auth: AngularFireAuth,
    private service: CurrentUserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.currentUser = this.service.currentUser;
  }

  async logout() {
    await this.auth.signOut();
    this.service.removeUser();
    this.currentUser = null;
    this.router.navigateByUrl('');
  }
}

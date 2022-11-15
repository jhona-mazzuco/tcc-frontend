import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CurrentUserService } from "@shared/services/current-user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private service: CurrentUserService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.service.currentUser) {
      this.router.navigate(['/login'], { queryParams: { oldParams: state.url } });
      return false;
    }

    return true;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { AuthService } from "../../authentication/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class OnlyAuthenticatedGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.service.currentUser
      .pipe(
        map(user => !!user),
        switchMap((hasUser) => {
          if (!hasUser) {
            this.router.navigateByUrl('/painel/login')
          }

          return of(hasUser);
        })
      );
  }

}

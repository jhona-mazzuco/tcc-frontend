import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {
  constructor(private service: AuthService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return !this.service.isAuthenticated;
  }
}

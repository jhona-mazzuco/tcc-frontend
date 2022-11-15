import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentUserService } from "@shared/services/current-user.service";
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private service: CurrentUserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${ this.service.currentUser?.token }`
        }
      })
    );
  }
}

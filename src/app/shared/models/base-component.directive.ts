import { Directive } from "@angular/core";
import { GENERIC_ERROR_MESSAGE } from "@shared/constants/generic-error-message.constant";
import { NotificationService } from "@shared/notification/notification.service";
import { Observable, of, ReplaySubject } from "rxjs";

@Directive()
export class BaseComponent {
  protected destroy$ = new ReplaySubject(1);

  constructor(public notification: NotificationService) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  catchError(message = GENERIC_ERROR_MESSAGE): Observable<null> {
    this.notification.error(message);
    return of(null);
  }
}

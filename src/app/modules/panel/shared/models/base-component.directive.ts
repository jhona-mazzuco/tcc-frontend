import { Directive } from "@angular/core";
import { Observable, of, ReplaySubject } from "rxjs";
import { GENERIC_ERROR_MESSAGE } from "../constants/generic-error-message.constant";
import { NotificationService } from "../services/notification.service";

@Directive()
export class BaseComponent {
  protected destroy$ = new ReplaySubject(1);

  constructor(protected notification: NotificationService) {
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

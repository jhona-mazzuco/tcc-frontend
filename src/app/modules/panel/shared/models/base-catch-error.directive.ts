import { Directive } from "@angular/core";
import { Observable, of } from "rxjs";
import { GENERIC_ERROR_MESSAGE } from "../constants/generic-error-message.constant";
import { NotificationService } from "../services/notification.service";

@Directive()
export class BaseCatchError {
  constructor(public notification: NotificationService) {
  }

  catchError(message = GENERIC_ERROR_MESSAGE): Observable<null> {
    this.notification.error(message);
    return of(null);
  }
}

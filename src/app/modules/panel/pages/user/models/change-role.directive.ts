import { Directive, EventEmitter, Input, Output, Self } from '@angular/core';
import { BaseComponent } from "@shared/models/base-component.directive";
import { NotificationService } from "@shared/notification/notification.service";
import { DefaultResponse } from "../interfaces/default-response.interface";

@Directive()
export class ChangeRoleComponent extends BaseComponent {
  @Input() uid!: string;
  @Output() onRoleChange = new EventEmitter();

  constructor(@Self() notification: NotificationService) {
    super(notification);
  }

  onChangeRoleSuccess({ message }: DefaultResponse) {
    this.onRoleChange.emit();
    this.notification.success(message);
  }
}

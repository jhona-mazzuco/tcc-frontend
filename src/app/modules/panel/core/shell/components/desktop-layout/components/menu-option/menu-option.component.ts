import { Component, Input } from '@angular/core';
import { MenuOption } from "../../../../interfaces/menu-option.interface";

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.scss']
})
export class MenuOptionComponent {
  @Input() option!: MenuOption;
  @Input() active!: boolean;
}

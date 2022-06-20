import { Component, Input } from '@angular/core';
import { MenuOption } from "../../interfaces/menu-option.interface";

@Component({
  selector: 'app-desktop-layout',
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.scss']
})
export class DesktopLayoutComponent {
  @Input() routes!: MenuOption[];
}

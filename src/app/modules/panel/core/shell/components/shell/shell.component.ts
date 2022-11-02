import { Platform } from "@angular/cdk/platform";
import { Component, OnInit } from '@angular/core';
import { MENU_OPTIONS } from "../../constants/menu-options.constant";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  isMobile!: boolean;
  routes = MENU_OPTIONS;

  constructor(private platform: Platform) {
  }

  ngOnInit(): void {
    this.checkIfMobile();
  }

  checkIfMobile(): void {
    this.isMobile = this.platform.ANDROID || this.platform.IOS;
  }
}

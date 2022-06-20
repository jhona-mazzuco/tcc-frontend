import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ShellComponent } from './components/shell/shell.component';
import { ShellRoutingModule } from "./shell.routing";
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { MenuOptionComponent } from './components/desktop-layout/components/menu-option/menu-option.component';
import { SettingsComponent } from './components/desktop-layout/components/settings/settings.component';


@NgModule({
  declarations: [
    ShellComponent,
    DesktopLayoutComponent,
    MenuOptionComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class ShellModule {
}

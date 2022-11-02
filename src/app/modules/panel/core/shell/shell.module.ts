import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MenuOptionComponent } from './components/desktop-layout/components/menu-option/menu-option.component';
import { SettingsComponent } from './components/desktop-layout/components/settings/settings.component';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { ShellComponent } from './components/shell/shell.component';
import { ShellRouting } from "./shell.routing";


@NgModule({
  declarations: [
    ShellComponent,
    DesktopLayoutComponent,
    MenuOptionComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ShellRouting,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
})
export class ShellModule {
}

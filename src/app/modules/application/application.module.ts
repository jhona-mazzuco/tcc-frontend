import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApplicationRoutingModule } from "./application.routing";
import { NavbarModule } from "./core/navbar/navbar.module";
import { ShellComponent } from "./core/shell/shell.component";


@NgModule({
  declarations: [
    ShellComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NavbarModule
  ]
})
export class ApplicationModule {
}

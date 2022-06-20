import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AuthenticationRouting } from "./authentication.routing";


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting,
    MatProgressSpinnerModule
  ]
})
export class AuthenticationModule {
}

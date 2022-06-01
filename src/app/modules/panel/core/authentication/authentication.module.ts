import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationRouting } from "./authentication.routing";


@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting
  ]
})
export class AuthenticationModule {
}

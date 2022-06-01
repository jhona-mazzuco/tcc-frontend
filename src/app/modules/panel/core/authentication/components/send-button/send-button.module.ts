import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SendButtonComponent } from "./send-button.component";

@NgModule({
  declarations: [SendButtonComponent],
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [SendButtonComponent]
})
export class SendButtonModule {
}

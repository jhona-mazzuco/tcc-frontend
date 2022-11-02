import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ICONS_REGISTRY } from "@shared/constants/icons-registry.constant";
import { PanelRouting } from "./panel.routing";


@NgModule({
  imports: [
    CommonModule,
    PanelRouting
  ],
})
export class PanelModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    for (let icon of ICONS_REGISTRY) {
      this.matIconRegistry.addSvgIcon(icon.name, this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path));
    }
  }
}

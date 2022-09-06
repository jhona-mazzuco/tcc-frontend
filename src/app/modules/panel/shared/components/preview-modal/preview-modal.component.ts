import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss'],
})
export class PreviewModalComponent {
  @Input() src!: string;
}

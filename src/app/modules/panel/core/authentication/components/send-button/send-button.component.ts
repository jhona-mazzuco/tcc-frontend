import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-send-button',
  templateUrl: './send-button.component.html',
  styleUrls: ['./send-button.component.scss'],
})
export class SendButtonComponent {
  @Input() loading!: boolean;
}

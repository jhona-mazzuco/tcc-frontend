import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { ScheduleItem } from "../../interfaces/schedule-item.interface";

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent {
  @Input() id!: string;
  @Input() date!: string;
  @Input() data!: ScheduleItem;

  constructor(private router: Router) {
  }

  onClick() {
    const queryParams = {
      fieldId: this.id,
      date: this.date,
      hour: this.data.hour,
    };

    this.router.navigate(['/horarios', this.id, 'agendar'], { queryParams });
  }
}

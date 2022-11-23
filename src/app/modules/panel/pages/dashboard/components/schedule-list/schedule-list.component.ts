import { Component, Input } from '@angular/core';
import { Schedule } from "../../interfaces/schedule.interface";

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent {
  @Input() schedules!: Schedule[];

  removeItem(schedule: Schedule) {
    this.schedules.splice(this.schedules.indexOf(schedule), 1);
    this.schedules = [...this.schedules];
  }
}

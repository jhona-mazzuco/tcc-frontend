import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Schedule } from "./interfaces/schedule.interface";
import { DashboardService } from "./services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  items$!: Observable<Schedule[]>;

  constructor(private service: DashboardService) {
  }

  fetch(date: string | null) {
    this.items$ = this.service.fetch(date!);
  }
}

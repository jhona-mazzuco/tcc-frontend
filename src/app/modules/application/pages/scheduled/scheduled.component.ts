import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { SchedulingService } from "../../services/scheduling.service";
import { Obligation } from "./interfaces/obligation.interface";

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss']
})
export class ScheduledComponent implements OnInit {
  items$!: Observable<Obligation[]>;

  constructor(private service: SchedulingService) {
  }

  ngOnInit(): void {
    this.items$ = this.service.scheduled()
  }

}

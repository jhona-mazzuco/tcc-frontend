import { DatePipe } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-day-select-container',
  templateUrl: './day-select-container.component.html',
  styleUrls: ['./day-select-container.component.scss']
})
export class DaySelectContainerComponent implements AfterViewInit {
  @Output() onDaySelect = new EventEmitter<string | null>();

  control = new FormControl(new Date().toDateString());

  constructor(private datePipe: DatePipe) {
  }

  ngAfterViewInit(): void {
    this.onDaySelect.emit(this.datePipe.transform(this.control.value, 'yyyy-MM-dd'));
  }
}

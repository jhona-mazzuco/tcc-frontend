import { Component, OnInit } from '@angular/core';
import { NotificationService } from "@shared/notification/notification.service";
import { catchError, Observable, of } from "rxjs";
import { Food } from "../../interfaces/food.interface";
import { DashboardService } from "../../services/dashboard.service";

@Component({
  selector: 'app-food-modal',
  templateUrl: './food-modal.component.html',
  styleUrls: ['./food-modal.component.scss']
})
export class FoodModalComponent implements OnInit {
  id!: string;
  data$!: Observable<Food>;

  constructor(private service: DashboardService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.data$ = this.service.getFood(this.id)
      .pipe(catchError(({ error }) => {
        this.notification.error(error?.message)
        return of();
      }));
  }
}

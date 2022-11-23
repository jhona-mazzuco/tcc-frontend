import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { LoadingComponent } from "@shared/components/loading/loading.component";
import { NotificationModule } from "@shared/notification/notification.module";
import { DaySelectContainerModule } from "@shared/components/day-select-container/day-select-container.module";
import { FoodModalComponent } from './components/food-modal/food-modal.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { ScheduleRowComponent } from './components/schedule-row/schedule-row.component';
import { WidgetTitleComponent } from './components/widget/components/widget-title/widget-title.component';
import { WidgetValueComponent } from './components/widget/components/widget-value/widget-value.component';
import { WidgetComponent } from './components/widget/widget.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from "./dashboard.routing";
import { SumFoodToMakePipe } from './pipes/sum-food-to-make.pipe';
import { SumPricesPipe } from './pipes/sum-prices.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    WidgetComponent,
    WidgetTitleComponent,
    WidgetValueComponent,
    SumPricesPipe,
    SumFoodToMakePipe,
    ScheduleRowComponent,
    ScheduleListComponent,
    FoodModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    DaySelectContainerModule,
    MatIconModule,
    LoadingComponent,
    ScrollingModule,
    MatButtonModule,
    MatDialogModule,
    NotificationModule
  ],
  providers: [DatePipe]
})
export class DashboardModule {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NotificationService } from "../../shared/services/notification.service";
import { DemoteToUserComponent } from './components/demote-to-user/demote-to-user.component';
import { PromoteToAdminComponent } from './components/promote-to-admin/promote-to-admin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from "./services/user.service";
import { UserRouting } from "./user.routing";


@NgModule({
  declarations: [
    UserListComponent,
    UserTableComponent,
    PromoteToAdminComponent,
    DemoteToUserComponent,
  ],
  imports: [
    CommonModule,
    UserRouting,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  providers: [UserService, NotificationService]
})
export class UserModule {
}

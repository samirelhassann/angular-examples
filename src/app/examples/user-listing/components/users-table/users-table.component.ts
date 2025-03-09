import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { User } from "../../domains/user";
import { UserDetailsDialogComponent } from "../user-details-dialog/user-details-dialog.component";

const LOADING_QUANTITY = 7;

@Component({
  selector: "app-users-table",
  standalone: false,
  templateUrl: "./users-table.component.html",
  styleUrl: "./users-table.component.scss",
})
export class UsersTableComponent {
  @Input({ required: true }) users!: User[];
  @Input() isLoading = false;
  loadingQuantity = Array.from({ length: LOADING_QUANTITY });

  constructor(public dialog: MatDialog) {}

  openDialog(user: User): void {
    this.dialog.open(UserDetailsDialogComponent, {
      data: {
        user,
      },
    });
  }
}

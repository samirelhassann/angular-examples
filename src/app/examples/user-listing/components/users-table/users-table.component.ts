import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { User } from "../../domains/User";
import { UserDetailsDialogComponent } from "../user-details-dialog/user-details-dialog.component";

@Component({
  selector: "app-users-table",
  standalone: false,
  templateUrl: "./users-table.component.html",
  styleUrl: "./users-table.component.scss",
})
export class UsersTableComponent {
  @Input({ required: true }) users!: User[];

  constructor(public dialog: MatDialog) {}

  openDialog(user: User): void {
    this.dialog.open(UserDetailsDialogComponent, {
      data: {
        user,
      },
    });
  }
}

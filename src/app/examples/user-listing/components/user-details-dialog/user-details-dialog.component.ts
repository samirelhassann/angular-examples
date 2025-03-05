import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { User } from "../../domains/user";

@Component({
  selector: "app-user-details-dialog",
  standalone: false,
  templateUrl: "./user-details-dialog.component.html",
  styleUrl: "./user-details-dialog.component.scss",
})
export class UserDetailsDialogComponent {
  user: User;

  constructor(
    public dialogRef: MatDialogRef<UserDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
  ) {
    this.user = data.user;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

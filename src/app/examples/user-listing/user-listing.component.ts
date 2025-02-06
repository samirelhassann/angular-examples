/* eslint-disable max-len */
import { Component } from "@angular/core";

import makeUserList from "./data/makeUserList";
import { User } from "./domains/User";

@Component({
  selector: "app-user-listing",
  standalone: false,
  templateUrl: "./user-listing.component.html",
  styleUrl: "./user-listing.component.scss",
})
export class UserListingComponent {
  users: User[] = makeUserList();
  formattedUsers: User[] = this.users;

  onSearchInputted(inputText: string) {
    this.formattedUsers = this.users.filter((user) => user.name.toLowerCase().includes(inputText.toLowerCase()));
  }
}

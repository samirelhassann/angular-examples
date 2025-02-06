/* eslint-disable max-len */
import { Component, OnInit } from "@angular/core";

import makeUserList from "./data/makeUserList";
import { User } from "./domains/user";

@Component({
  selector: "app-user-listing",
  standalone: false,
  templateUrl: "./user-listing.component.html",
  styleUrl: "./user-listing.component.scss",
})
export class UserListingComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];

  ngOnInit(): void {
    this.users = makeUserList();
    this.filteredUsers = this.users;
  }

  onSearchInputted(inputText: string) {
    this.filteredUsers = this.users.filter((user) => user.name.toLowerCase().includes(inputText.toLowerCase()));
  }
}

import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { User } from "./domains/user";
import { GetUsersUseCase } from "./use-cases/get-file-content/get-users.use-case";
import { ObservableHandler, ServiceState } from "./utils/observable-handler";

@Component({
  selector: "app-user-listing",
  standalone: false,
  templateUrl: "./user-listing.component.html",
  styleUrls: ["./user-listing.component.scss"],
})
export class UserListingComponent implements OnInit {
  filteredText: string = "";
  usersState$?: Observable<ServiceState<User[]>>;

  constructor(
    private getUsersUseCase: GetUsersUseCase,
    private observableHandler: ObservableHandler,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.usersState$ = this.observableHandler.manage(() =>
      this.getUsersUseCase.execute(),
    );
  }

  onSearchInputted(inputText: string) {
    this.filteredText = inputText;
  }
}

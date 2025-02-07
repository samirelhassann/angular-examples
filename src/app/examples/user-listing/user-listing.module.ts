import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

import {
  LucideAngularModule,
  File,
  Home,
  Menu,
  UserCheck,
  Search,
  X,
} from "lucide-angular";

import { SearchComponent } from "./components/search/search.component";
import { UserDetailsDialogComponent } from "./components/user-details-dialog/user-details-dialog.component";
import { StatusTagComponent } from "./components/users-table/components/status-tag/status-tag.component";
import { UsersTableComponent } from "./components/users-table/users-table.component";

import { AddressFormatPipe } from "./pipes/address-format.pipe";
import { UserListingComponent } from "./user-listing.component";

@NgModule({
  declarations: [
    AddressFormatPipe,

    UserListingComponent,
    SearchComponent,
    UsersTableComponent,
    StatusTagComponent,
    UserDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    LucideAngularModule.pick({
      File,
      Home,
      Menu,
      UserCheck,
      Search,
      X,
    }),
  ],
})
export class UserListingModule {}

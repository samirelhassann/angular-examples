import {
  CommonModule,
  DATE_PIPE_DEFAULT_OPTIONS,
  registerLocaleData,
} from "@angular/common";
import localePT from "@angular/common/locales/pt";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

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
import { SkeletonComponent } from "./components/skeleton/skeleton.component";
import { UserDetailsDialogComponent } from "./components/user-details-dialog/user-details-dialog.component";
import { StatusTagComponent } from "./components/users-table/components/status-tag/status-tag.component";
import { UsersTableComponent } from "./components/users-table/users-table.component";

import { AddressFormatPipe } from "./pipes/address-format.pipe";
import { FilterUsersPipe } from "./pipes/filter-users.pipe";
import { UseCasesModule } from "./use-cases/use-cases.module";
import { UserListingComponent } from "./user-listing.component";

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AddressFormatPipe,

    UserListingComponent,
    SearchComponent,
    UsersTableComponent,
    StatusTagComponent,
    UserDetailsDialogComponent,
    SkeletonComponent,
    FilterUsersPipe,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { format: "dd/MM/yyyy", timezone: "+0000" },
    },
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    UseCasesModule,
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

platformBrowserDynamic().bootstrapModule(UserListingModule, {
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
});

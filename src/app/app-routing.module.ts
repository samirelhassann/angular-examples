import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreditCardsComponent } from "./examples/credit-cards/credit-cards.component";
import { LoginFormComponent } from "./examples/login-form/login-form.component";
import { UserListingComponent } from "./examples/user-listing/user-listing.component";

const routes: Routes = [
  {
    path: "credit-cards",
    component: CreditCardsComponent,
  },
  {
    path: "login-form",
    component: LoginFormComponent,
  },
  {
    path: "user-listing",
    component: UserListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

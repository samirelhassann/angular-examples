import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreditCardsComponent } from "./examples/credit-cards/credit-cards.component";
import { CreditDashboardComponent } from "./examples/credit-dashboard/credit-dashboard.component";
import { LoginFormComponent } from "./examples/login-form/login-form.component";
import { ProductCardComponent } from "./examples/product-card/product-card.component";
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
  {
    path: "credit-dashboard",
    component: CreditDashboardComponent,
  },
  {
    path: "product-card",
    component: ProductCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

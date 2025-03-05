import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreditCardsComponent } from "./examples/credit-cards/credit-cards.component";
import { CreditDashboardComponent } from "./examples/credit-dashboard/credit-dashboard.component";
import { LoginFormComponent } from "./examples/login-form/login-form.component";
import { MultiStepFormComponent } from "./examples/multi-step-form/multi-step-form.component";
import { ProductCardsComponent } from "./examples/product-cards/product-cards.component";
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
    component: ProductCardsComponent,
  },
  {
    path: "multi-step-form",
    component: MultiStepFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

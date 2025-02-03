import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreditCardsComponent } from "./pages/components/credit-cards/credit-cards.component";
import { LoginFormComponent } from "./pages/components/login-form/login-form.component";

const routes: Routes = [
  {
    path: "1_components/credit-cards",
    component: CreditCardsComponent,
  },
  {
    path: "1_components/login-form",
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

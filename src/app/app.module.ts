import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // Importe o RouterModule

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreditCardsModule } from "./examples/credit-cards/credit-cards.module";
import { LoginFormModule } from "./examples/login-form/login-form.module";
import { UserListingModule } from "./examples/user-listing/credit-cards.module";
import { ProjectsMappingComponent } from "./projects-mapping/projects-mapping.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsMappingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),

    CreditCardsModule,
    LoginFormModule,
    UserListingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

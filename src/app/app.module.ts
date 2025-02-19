import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // Importe o RouterModule

import {
  ChevronDown,
  ChevronRight,
  Code,
  Component,
  Folder,
  LucideAngularModule,
} from "lucide-angular";

import { FileExplorerComponent } from "./code-preview/components/file-explorer/file-explorer.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CodePreviewComponent } from "./code-preview/code-preview.component";
import { CreditCardsModule } from "./examples/credit-cards/credit-cards.module";
import { CreditDashBoardModule } from "./examples/credit-dashboard/credit-dashboard.module";
import { LoginFormModule } from "./examples/login-form/login-form.module";
import { ProductCardsModule } from "./examples/product-cards/product-cards.module";
import { UserListingModule } from "./examples/user-listing/user-listing.module";
import { ProjectsMappingComponent } from "./projects-mapping/projects-mapping.component";
import { ToggleComponent } from "./toggle/toggle.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsMappingComponent,
    ToggleComponent,
    CodePreviewComponent,
    FileExplorerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),

    CreditCardsModule,
    LoginFormModule,
    UserListingModule,
    CreditDashBoardModule,
    ProductCardsModule,

    LucideAngularModule.pick({
      Component,
      Code,
      Folder,
      ChevronRight,
      ChevronDown,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

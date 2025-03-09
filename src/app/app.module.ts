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
import { HighlightAuto, provideHighlightOptions } from "ngx-highlightjs";
import { HighlightLineNumbers } from "ngx-highlightjs/line-numbers";

import { CodePreviewComponent } from "./components/code-preview/code-preview.component";
import { CodeHighlighterComponent } from "./components/code-preview/components/code-highlighter/code-highlighter.component";
import { FileCodePreviewComponent } from "./components/code-preview/components/file-code-preview/file-code-preview.component";
import { FileExplorerComponent } from "./components/code-preview/components/file-explorer/file-explorer.component";
import { ProjectsMappingComponent } from "./components/projects-mapping/projects-mapping.component";
import { SkeletonComponent } from "./components/skeleton/skeleton.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreditCardsModule } from "./examples/credit-cards/credit-cards.module";
import { CreditDashBoardModule } from "./examples/credit-dashboard/credit-dashboard.module";
import { LoginFormModule } from "./examples/login-form/login-form.module";
import { MultiStepFormModule } from "./examples/multi-step-form/multi-step-form.module";
import { ProductCardsModule } from "./examples/product-cards/product-cards.module";
import { UserListingModule } from "./examples/user-listing/user-listing.module";
import { ToggleComponent } from "./toggle/toggle.component";
import { UseCaseModule } from "./use-case/use-case.module";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsMappingComponent,
    ToggleComponent,
    CodePreviewComponent,
    FileExplorerComponent,
    FileCodePreviewComponent,
    CodeHighlighterComponent,
    SkeletonComponent,
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
    MultiStepFormModule,
    UseCaseModule,

    LucideAngularModule.pick({
      Component,
      Code,
      Folder,
      ChevronRight,
      ChevronDown,
    }),
    HighlightAuto,
    HighlightLineNumbers,
  ],
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import("highlight.js"),
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

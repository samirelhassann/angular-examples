import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HandCoins, LucideAngularModule, Loader } from "lucide-angular";

import { CardLoadingComponent } from "./components/card-loading/card-loading.component";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/header/header.component";

import { CardWrapperComponent } from "./card-wrapper.component";

@NgModule({
  declarations: [
    CardWrapperComponent,
    CardComponent,
    HeaderComponent,
    CardLoadingComponent,
  ],
  exports: [CardWrapperComponent],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      HandCoins,
      Loader,
    }),
  ],
})
export class CardWrapperComponentModule {}

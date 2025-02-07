import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CreditCardComponent } from "./components/credit-card/credit-card.component";

import { CreditCardsComponent } from "./credit-cards.component";
import { CardNumberFormatPipe } from "./pipes/card-number-format.pipe";
import { CardVariantColorPipe } from "./pipes/card-variant-color.pipe";

@NgModule({
  declarations: [
    CardNumberFormatPipe,
    CardVariantColorPipe,

    CreditCardComponent,
    CreditCardsComponent,
  ],
  imports: [CommonModule],
})
export class CreditCardsModule {}

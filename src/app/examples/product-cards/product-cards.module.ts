import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProductCardModule } from "./components/product-card/product-card.module";

import { ProductCardsComponent } from "./product-cards.component";

@NgModule({
  declarations: [ProductCardsComponent],
  imports: [CommonModule, ProductCardModule],
})
export class ProductCardsModule {}

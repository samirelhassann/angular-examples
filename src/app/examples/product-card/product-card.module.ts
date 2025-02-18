import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StartRatingComponent } from "./components/start-rating/start-rating.component";

import { ProductCardComponent } from "./product-card.component";

@NgModule({
  declarations: [ProductCardComponent, StartRatingComponent],
  imports: [CommonModule],
})
export class ProductCardModule {}

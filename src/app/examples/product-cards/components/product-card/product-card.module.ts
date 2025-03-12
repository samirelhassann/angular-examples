import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProductPriceComponent } from "./components/product-price/product-price.component";
import { ProductTagsComponent } from "./components/product-tags/product-tags.component";
import { StarRatingComponent } from "./components/star-rating/star-rating.component";

import { ProductCardSubtitleDirective } from "./directives/product-card-subtitle.directive";
import { ProductCardTitleDirective } from "./directives/product-card-title.directive";
import { ProductCardComponent } from "./product-card.component";

const COMPONENTS = [
  ProductCardComponent,
  StarRatingComponent,
  ProductPriceComponent,
  ProductTagsComponent,
];

const DIRECTIVES = [ProductCardTitleDirective, ProductCardSubtitleDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class ProductCardModule {}

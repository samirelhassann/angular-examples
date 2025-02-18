import { Directive } from "@angular/core";

@Directive({
  selector: "app-product-card-title, [appProductCardTitle]",
  standalone: false,
  host: {
    class: "ae-c-product-card-title",
  },
})
export class ProductCardTitleDirective {}

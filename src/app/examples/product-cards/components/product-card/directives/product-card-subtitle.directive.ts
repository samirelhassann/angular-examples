import { Directive } from "@angular/core";

@Directive({
  selector: "app-product-card-subtitle, [appProductCardSubtitle]",
  standalone: false,
  host: {
    class: "ae-c-product-card-subtitle",
  },
})
export class ProductCardSubtitleDirective {}

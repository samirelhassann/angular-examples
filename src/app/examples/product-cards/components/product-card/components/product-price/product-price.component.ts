import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-price",
  standalone: false,
  templateUrl: "./product-price.component.html",
  styleUrl: "./product-price.component.scss",
})
export class ProductPriceComponent {
  @Input({ required: true }) actual!: number;
  @Input() old?: number;
}

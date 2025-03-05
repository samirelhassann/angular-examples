import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-tags",
  standalone: false,
  templateUrl: "./product-tags.component.html",
  styleUrl: "./product-tags.component.scss",
})
export class ProductTagsComponent {
  @Input({ required: true }) tags!: string[];
}

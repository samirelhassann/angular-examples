import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-loading",
  standalone: false,
  templateUrl: "./card-loading.component.html",
  styleUrl: "./card-loading.component.scss",
})
export class CardLoadingComponent {
  @Input({ required: true }) title!: string;
  @Input() totalAmount: number | undefined;
}

import { Component, Input } from "@angular/core";

export type IconType = "HandCoins" | "CreditCard" | "User";

@Component({
  selector: "app-card",
  standalone: false,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: IconType;
  @Input() totalAmount?: number;
  @Input() isTotalAmountLoading?: boolean = false;
}

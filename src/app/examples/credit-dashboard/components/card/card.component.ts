import { Component } from "@angular/core";

export type IconType = "HandCoins" | "CreditCard" | "User";

@Component({
  selector: "app-card",
  standalone: false,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {}

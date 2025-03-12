import { Component } from "@angular/core";

interface Card {
  variant: "blue" | "violet" | "black";
  currentBalance: number;
  number: number;
  expiration: Date;
}

@Component({
  selector: "app-credit-cards",
  standalone: false,
  templateUrl: "./credit-cards.component.html",
  styleUrl: "./credit-cards.component.scss",
})
export class CreditCardsComponent {
  cards: Card[] = [
    {
      variant: "violet",
      currentBalance: 5000,
      number: 1234567890123456,
      expiration: new Date(2023, 10),
    },
    {
      variant: "blue",
      currentBalance: 5000,
      number: 1234567890123456,
      expiration: new Date(2023, 10),
    },
    {
      variant: "black",
      currentBalance: 5000,
      number: 1234567890123456,
      expiration: new Date(2023, 10),
    },
  ];
}

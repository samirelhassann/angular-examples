import { Component, Input } from "@angular/core";

@Component({
  selector: "app-credit-card",
  standalone: false,
  templateUrl: "./credit-card.component.html",
  styleUrl: "./credit-card.component.scss",
})
export class CreditCardComponent {
  formattedBalance: string = "";

  @Input() variant: "blue" | "violet" | "black" = "blue";
  @Input({ required: true }) expirationDate!: Date;
  @Input({ required: true }) cardNumber!: number;
  @Input({ required: true }) currentBalance!: number;
}

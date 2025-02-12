import { Component, Input } from "@angular/core";

export interface CardComponentInputProps {
  title: string;
  totalAmount: number | undefined;
}

@Component({
  selector: "app-card",
  standalone: false,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent implements CardComponentInputProps {
  @Input({ required: true }) title!: string;
  @Input() totalAmount: number | undefined;
}

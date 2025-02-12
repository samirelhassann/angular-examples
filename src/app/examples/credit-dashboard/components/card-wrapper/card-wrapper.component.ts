import { Component, Input } from "@angular/core";

import { CardComponentInputProps } from "./components/card/card.component";

@Component({
  selector: "app-card-wrapper",
  standalone: false,
  templateUrl: "./card-wrapper.component.html",
  styleUrl: "./card-wrapper.component.scss",
})
export class CardWrapperComponent implements CardComponentInputProps {
  @Input() title!: string;
  @Input() totalAmount: number | undefined;
  @Input() isLoading: boolean | null = false;
}

import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-header",
  standalone: false,
  templateUrl: "./card-header.component.html",
  styleUrl: "./card-header.component.scss",
})
export class CardHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: string;
  @Input() totalAmount: number | undefined;
}

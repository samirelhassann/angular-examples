import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-row",
  standalone: false,
  templateUrl: "./card-row.component.html",
  styleUrl: "./card-row.component.scss",
})
export class CardRowComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: number | string;
  @Input() isValueHighlighted: boolean = false;
  @Input() isBordered: boolean = true;
}

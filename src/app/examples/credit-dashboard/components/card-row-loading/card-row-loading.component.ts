import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-row-loading",
  standalone: false,
  templateUrl: "./card-row-loading.component.html",
  styleUrl: "./card-row-loading.component.scss",
})
export class CardRowLoadingComponent {
  @Input() isBordered: boolean = true;
}

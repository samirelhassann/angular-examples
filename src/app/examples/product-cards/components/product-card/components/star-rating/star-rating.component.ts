import { Component, Input } from "@angular/core";

const START_QUANTITY = 5;

@Component({
  selector: "app-star-rating",
  standalone: false,
  templateUrl: "./star-rating.component.html",
  styleUrl: "./star-rating.component.scss",
})
export class StarRatingComponent {
  @Input({ required: true }) rate!: number;

  stars = Array.from({ length: START_QUANTITY });
}

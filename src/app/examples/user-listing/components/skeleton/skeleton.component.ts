import { Component, Input } from "@angular/core";

@Component({
  selector: "app-skeleton",
  standalone: false,
  templateUrl: "./skeleton.component.html",
  styleUrl: "./skeleton.component.scss",
})
export class SkeletonComponent {
  @Input({ required: true }) width!: number;
  @Input({ required: true }) height!: number;
}

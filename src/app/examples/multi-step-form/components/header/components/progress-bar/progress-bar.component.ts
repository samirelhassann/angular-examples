import { Component, Input } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  standalone: false,
  templateUrl: "./progress-bar.component.html",
  styleUrl: "./progress-bar.component.scss",
})
export class ProgressBarComponent {
  @Input({ required: true }) percent!: number;
}

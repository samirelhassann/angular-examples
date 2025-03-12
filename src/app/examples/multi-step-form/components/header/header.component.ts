import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: false,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnChanges {
  @Input({ required: true }) totalSteps!: number;
  @Input({ required: true }) currentStep!: number;

  calculatedPercentage = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["currentStep"]) {
      this.calculatedPercentage = (this.currentStep / this.totalSteps) * 100;
    }
  }
}

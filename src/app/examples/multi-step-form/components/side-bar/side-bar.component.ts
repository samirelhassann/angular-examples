import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Step } from "../../types/step";

@Component({
  selector: "app-side-bar",
  standalone: false,
  templateUrl: "./side-bar.component.html",
  styleUrl: "./side-bar.component.scss",
})
export class SideBarComponent {
  @Input({ required: true }) step!: Step;

  @Input() isLastStep: boolean = false;
  @Input() isFirstStep: boolean = false;

  @Output() buttonClickedEmitt = new EventEmitter<number>();

  onContinue() {
    this.buttonClickedEmitt.emit(this.step.step + 1);
  }

  onBack() {
    this.buttonClickedEmitt.emit(this.step.step - 1);
  }
}

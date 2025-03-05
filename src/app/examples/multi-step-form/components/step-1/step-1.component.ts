import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-step-1",
  standalone: false,
  templateUrl: "./step-1.component.html",
  styleUrl: "./step-1.component.scss",
})
export class Step1Component {
  @Input({ required: true }) formGroup!: FormGroup;
}

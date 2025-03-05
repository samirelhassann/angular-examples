import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-step-2",
  standalone: false,
  templateUrl: "./step-2.component.html",
  styleUrl: "./step-2.component.scss",
})
export class Step2Component {
  @Input({ required: true }) formGroup!: FormGroup;
}

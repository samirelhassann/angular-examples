import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: false,
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
})
export class InputComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) formGroup!: FormGroup;
  @Input() optional?: boolean = false;
  @Input() placeHolder?: string;
}

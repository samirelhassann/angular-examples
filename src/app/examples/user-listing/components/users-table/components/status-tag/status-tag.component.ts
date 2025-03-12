import { Component, Input } from "@angular/core";

@Component({
  selector: "app-status-tag",
  standalone: false,
  templateUrl: "./status-tag.component.html",
  styleUrl: "./status-tag.component.scss",
})
export class StatusTagComponent {
  @Input({ required: true }) enabled!: boolean;
}

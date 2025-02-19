import { Component, EventEmitter, Input, Output } from "@angular/core";

import { SectionType } from "../app.component";

@Component({
  selector: "app-toggle",
  standalone: false,
  templateUrl: "./toggle.component.html",
  styleUrl: "./toggle.component.scss",
})
export class ToggleComponent {
  @Input({ required: true }) sectionType!: SectionType;

  @Output() changeSectionTypeEmitt = new EventEmitter<SectionType>();

  onChangeType(value: SectionType) {
    this.changeSectionTypeEmitt.emit(value);
  }
}

import { Component } from "@angular/core";

export type SectionType = "component" | "code";

@Component({
  selector: "app-root",
  standalone: false,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular-fundamentals";

  sectionType: SectionType = "component";

  handleChangeSectionType(sectionType: SectionType) {
    this.sectionType = sectionType;
  }
}

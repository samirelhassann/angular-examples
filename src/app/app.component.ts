import { Component } from "@angular/core";

import { Route } from "./components/projects-mapping/projects-mapping.component";

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

  routeSelected?: Route;

  handleSelectedRoute(route: Route) {
    this.sectionType = "component";
    this.routeSelected = route;
  }

  handleChangeSectionType(sectionType: SectionType) {
    this.sectionType = sectionType;
  }
}

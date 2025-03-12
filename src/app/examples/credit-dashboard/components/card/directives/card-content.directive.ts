import { Directive } from "@angular/core";

@Directive({
  selector: "app-card-content, [appCardContent]",
  standalone: false,
  host: {
    class: "ae-c-card-content",
  },
})
export class CardContentDirective {}

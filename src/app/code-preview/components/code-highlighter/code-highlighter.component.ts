import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-code-highlighter",
  standalone: false,
  templateUrl: "./code-highlighter.component.html",
  styleUrls: ["./code-highlighter.component.scss"],
})
export class CodeHighlighterComponent implements OnChanges {
  @Input() codeBase64?: string;

  code: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["codeBase64"] && changes["codeBase64"].currentValue) {
      try {
        this.code = atob(changes["codeBase64"].currentValue);
      } catch (e) {
        this.code = `Error on decode: ${e}`;
      }
    }
  }
}

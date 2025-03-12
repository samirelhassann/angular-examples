import { Component, Input } from "@angular/core";

@Component({
  selector: "app-file-code-preview",
  standalone: false,
  templateUrl: "./file-code-preview.component.html",
})
export class FileCodePreviewComponent {
  @Input() content?: string;
}

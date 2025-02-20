import { Component } from "@angular/core";

import { CodeFile, CodeFileType } from "./types/code-file";

@Component({
  selector: "app-code-preview",
  standalone: false,
  templateUrl: "./code-preview.component.html",
  styleUrl: "./code-preview.component.scss",
})
export class CodePreviewComponent {
  files: CodeFile[] = [
    {
      name: "app",
      type: CodeFileType.FOLDER,
      children: [
        {
          name: "app.component.ts",
          type: CodeFileType.FILE,
          content: "export class AppComponent {}",
        },
        {
          name: "app.component.html",
          type: CodeFileType.FILE,
          content: "<h1>Hello, World!</h1>",
        },
        {
          name: "src",
          type: CodeFileType.FOLDER,
          children: [
            {
              name: "index.ts",
              type: CodeFileType.FILE,
              content:
                "PGRpdiBjbGFzcz0iY29udGFpbmVyIj4KICA8ZGl2IGNsYXNzPSJjYXJkcy1s\naXN0Ij4KICAgIDxhcHAtY3JlZGl0LWNhcmQKICAgICAgKm5nRm9yPSJsZXQg\nY2FyZCBvZiBjYXJkcyIKICAgICAgW3ZhcmlhbnRdPSJjYXJkLnZhcmlhbnQi\nCiAgICAgIFtjdXJyZW50QmFsYW5jZV09ImNhcmQuY3VycmVudEJhbGFuY2Ui\nCiAgICAgIFtjYXJkTnVtYmVyXT0iY2FyZC5udW1iZXIiCiAgICAgIFtleHBp\ncmF0aW9uRGF0ZV09ImNhcmQuZXhwaXJhdGlvbiI+PC9hcHAtY3JlZGl0LWNh\ncmQ+CiAgPC9kaXY+CjwvZGl2Pgo=\n",
            },
            {
              name: "app",
              type: CodeFileType.FOLDER,
              children: [
                {
                  name: "app.module.ts",
                  type: CodeFileType.FILE,
                  content: "export class AppModule {}",
                },
                {
                  name: "app-routing.module.ts",
                  type: CodeFileType.FILE,
                  content: "export class AppRoutingModule {}",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  selectedFile?: CodeFile;

  handleSelectContent(file: CodeFile): void {
    this.selectedFile = file;
  }
}

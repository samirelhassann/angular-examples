import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { GetStructureByPathUseCase } from "@/use-case/get-structure-by-path/get-structure-by-path.use-case";

import { CodeFile } from "../../domains/code-file";

@Component({
  selector: "app-code-preview",
  standalone: false,
  templateUrl: "./code-preview.component.html",
  styleUrl: "./code-preview.component.scss",
})
export class CodePreviewComponent implements OnChanges {
  @Input() selectedPath?: string;

  files?: CodeFile[];

  constructor(private getStructureByPathUseCase: GetStructureByPathUseCase) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.files = undefined;
    if (changes["selectedPath"] && changes["selectedPath"].currentValue) {
      this.loadFiles(changes["selectedPath"].currentValue);
    }
  }

  private loadFiles(path: string): void {
    this.getStructureByPathUseCase.execute({ path }).then((files) => {
      this.files = files;
    });
  }

  selectedFile?: CodeFile;

  handleSelectContent(file: CodeFile): void {
    this.selectedFile = file;
  }
}

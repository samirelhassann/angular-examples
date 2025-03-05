import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Observable } from "rxjs";

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

  files$?: Observable<CodeFile[]>;
  selectedFile?: CodeFile;

  constructor(private getStructureByPathUseCase: GetStructureByPathUseCase) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedPath"] && changes["selectedPath"].currentValue) {
      const path = changes["selectedPath"].currentValue;
      this.loadFiles(path);
    }
  }

  private loadFiles(path: string): void {
    this.files$ = this.getStructureByPathUseCase.execute({ path });
  }

  handleSelectContent(file: CodeFile): void {
    this.selectedFile = file;
  }
}

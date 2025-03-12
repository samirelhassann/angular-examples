import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Observable } from "rxjs";

import { GetStructureByPathUseCase } from "@/use-case/get-structure-by-path/get-structure-by-path.use-case";
import { ObservableHandler, ServiceState } from "@/utils/observable-handler";

import { CodeFile } from "../../domains/code-file";

const LOADING_QUANTITY = 10;

@Component({
  selector: "app-code-preview",
  standalone: false,
  templateUrl: "./code-preview.component.html",
  styleUrl: "./code-preview.component.scss",
})
export class CodePreviewComponent implements OnChanges {
  @Input() selectedPath?: string;

  filesState$?: Observable<ServiceState<CodeFile[]>>;
  selectedFile?: CodeFile;

  loadingQuantity = Array.from({ length: LOADING_QUANTITY });

  constructor(
    private getStructureByPathUseCase: GetStructureByPathUseCase,
    private observableHandler: ObservableHandler,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["selectedPath"] && changes["selectedPath"].currentValue) {
      const path = changes["selectedPath"].currentValue;
      this.loadFiles(path);
    }
  }

  private loadFiles(path: string): void {
    this.filesState$ = this.observableHandler.manage(() =>
      this.getStructureByPathUseCase.execute({ path }),
    );
  }

  handleSelectContent(file: CodeFile): void {
    this.selectedFile = file;
  }
}

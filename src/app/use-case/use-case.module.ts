import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { GetFileContentUseCase } from "./get-file-content/get-file-content.use-case";
import { GetFolderFilesUseCase } from "./get-folder-files/get-folder-files.use-case";
import { GetStructureByPathUseCase } from "./get-structure-by-path/get-structure-by-path.use-case";

@NgModule({
  providers: [
    GetFileContentUseCase,
    GetFolderFilesUseCase,
    GetStructureByPathUseCase,
  ],
  imports: [CommonModule],
})
export class UseCaseModule {}

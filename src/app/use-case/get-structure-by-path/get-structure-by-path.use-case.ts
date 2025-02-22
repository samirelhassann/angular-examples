import { Injectable } from "@angular/core";

import { CodeFile, CodeFileType } from "@/domains/code-file";

import { GetFileContentUseCase } from "../get-file-content/get-file-content.use-case";
import { GetFolderFilesUseCase } from "../get-folder-files/get-folder-files.use-case";

export interface GetStructureByPathUseCaseProps {
  path: string;
}

@Injectable({
  providedIn: "root",
})
export class GetStructureByPathUseCase {
  constructor(
    private getFolderFilesUseCase: GetFolderFilesUseCase,
    private getFileContentUseCase: GetFileContentUseCase,
  ) {}

  async execute(props: GetStructureByPathUseCaseProps): Promise<CodeFile[]> {
    const { path } = props;
    return this.getStructureRecursive(path);
  }

  private async getStructureRecursive(folderPath: string): Promise<CodeFile[]> {
    const structure = await this.getFolderFilesUseCase.execute({
      folderPath,
      repoName: "angular-examples",
      userName: "samirelhassann",
    });

    const filePromises = structure.map(async (file) => {
      if (file.type === CodeFileType.FILE) {
        const content = await this.getFileContentUseCase.execute({
          filePath: file.path,
          repoName: "angular-examples",
          userName: "samirelhassann",
        });
        return { ...file, content: content?.content } as CodeFile;
      }
      if (file.type === CodeFileType.FOLDER) {
        const children = await this.getStructureRecursive(file.path);
        return { ...file, children } as CodeFile;
      }
      return file as CodeFile;
    });

    const allFiles = await Promise.all(filePromises);

    const sortedFiles = allFiles.sort((a, b) => {
      if (a.type === CodeFileType.FOLDER && b.type === CodeFileType.FILE) {
        return -1;
      }
      if (a.type === CodeFileType.FILE && b.type === CodeFileType.FOLDER) {
        return 1;
      }
      return 0;
    });

    return sortedFiles;
  }
}

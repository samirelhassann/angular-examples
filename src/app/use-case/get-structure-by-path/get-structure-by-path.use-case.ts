import { Injectable } from "@angular/core";

import { Observable, forkJoin, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

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

  execute(props: GetStructureByPathUseCaseProps): Observable<CodeFile[]> {
    const { path } = props;
    return this.getStructureRecursive(path);
  }

  private getStructureRecursive(folderPath: string): Observable<CodeFile[]> {
    return this.getFolderFilesUseCase
      .execute({
        folderPath,
        repoName: "angular-examples",
        userName: "samirelhassann",
      })
      .pipe(switchMap((files) => this.processFiles(files)));
  }

  private processFiles(files: CodeFile[]): Observable<CodeFile[]> {
    const fileObservables = files.map((file) => this.processFile(file));
    return forkJoin(fileObservables).pipe(
      map((allFiles) => this.sortFiles(allFiles)),
    );
  }

  private processFile(file: CodeFile): Observable<CodeFile> {
    if (file.type === CodeFileType.FILE) {
      return this.processFileContent(file);
    }
    if (file.type === CodeFileType.FOLDER) {
      return this.processFolder(file);
    }
    return of(file);
  }

  private processFileContent(file: CodeFile): Observable<CodeFile> {
    return this.getFileContentUseCase
      .execute({
        filePath: file.path,
        repoName: "angular-examples",
        userName: "samirelhassann",
      })
      .pipe(
        map((content) => ({ ...file, content: content?.content })),
        catchError(() => of({ ...file, content: undefined })), // Handle errors gracefully
      );
  }

  private processFolder(file: CodeFile): Observable<CodeFile> {
    return this.getStructureRecursive(file.path).pipe(
      map((children) => ({ ...file, children })),
    );
  }

  private sortFiles(files: CodeFile[]): CodeFile[] {
    return files.sort((a, b) => {
      if (a.type === CodeFileType.FOLDER && b.type === CodeFileType.FILE) {
        return -1;
      }
      if (a.type === CodeFileType.FILE && b.type === CodeFileType.FOLDER) {
        return 1;
      }
      return 0;
    });
  }
}

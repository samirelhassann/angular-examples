import { Injectable } from "@angular/core";

import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

import { CodeFile } from "@/domains/code-file";
import { GithubService } from "@/services/github/github.service";

// eslint-disable-next-line import/no-cycle
import { GetFolderFilesMapper } from "./mappers/get-folder-files.mapper";

export interface GetFolderFilesUseCaseProps {
  userName: string;
  repoName: string;
  folderPath: string;
}

@Injectable({
  providedIn: "root",
})
export class GetFolderFilesUseCase {
  constructor(
    private githubService: GithubService,
    private getFolderFilesMapper: GetFolderFilesMapper,
  ) {}

  execute(props: GetFolderFilesUseCaseProps): Observable<CodeFile[]> {
    const requestModel = this.getFolderFilesMapper.toRequestModel(props);
    const request = from(this.githubService.getFolderFiles(requestModel));

    return request.pipe(
      map((response) => this.getFolderFilesMapper.toDomain(response)),
    );
  }
}

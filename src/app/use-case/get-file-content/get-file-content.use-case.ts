import { Injectable } from "@angular/core";

import { from, map, Observable } from "rxjs";

import { CodeFile } from "@/domains/code-file";
import { GithubService } from "@/services/github/github.service";

// eslint-disable-next-line import/no-cycle
import { GetFileContentMapper } from "./mappers/get-file-content.mapper";

export interface GetFileContentUseCaseProps {
  userName: string;
  repoName: string;
  filePath: string;
}

@Injectable()
export class GetFileContentUseCase {
  constructor(
    private githubService: GithubService,
    private getFileContentMapper: GetFileContentMapper,
  ) {}

  execute(props: GetFileContentUseCaseProps): Observable<CodeFile> {
    const requestModel = this.getFileContentMapper.toRequestModel(props);
    const request = from(this.githubService.getFileContent(requestModel));

    return request.pipe(
      map((response) => this.getFileContentMapper.toDomain(response)),
    );
  }
}

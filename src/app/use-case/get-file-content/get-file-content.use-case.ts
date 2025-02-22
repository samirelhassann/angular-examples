import { Injectable } from "@angular/core";

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

  async execute(props: GetFileContentUseCaseProps): Promise<CodeFile> {
    const requestModel = this.getFileContentMapper.toRequestModel(props);
    const response = await this.githubService.getFileContent(requestModel);

    return this.getFileContentMapper.toDomain(response);
  }
}

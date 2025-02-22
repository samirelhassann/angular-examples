import { Injectable } from "@angular/core";

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

  async execute(props: GetFolderFilesUseCaseProps): Promise<CodeFile[]> {
    const requestModel = this.getFolderFilesMapper.toRequestModel(props);
    const response = await this.githubService.getFolderFiles(requestModel);

    return this.getFolderFilesMapper.toDomain(response);
  }
}

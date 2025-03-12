import { RequestModel } from "../../../utils/request-model";

interface PathParams {
  userName: string;
  repoName: string;
  folderPath: string;
}

export type GetFolderFilesRequestModel = RequestModel<{
  path: PathParams;
}>;

interface GetFolderFileResponseModel {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: null | string;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

export type GetFolderFilesResponseModel = GetFolderFileResponseModel[];

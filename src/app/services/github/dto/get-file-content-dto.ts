import { RequestModel } from "../../../utils/request-model";

interface PathParams {
  userName: string;
  repoName: string;
  filePath: string;
}

export type GetFileContentRequestModel = RequestModel<{
  path: PathParams;
}>;

export interface GetFileContentResponseModel {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}

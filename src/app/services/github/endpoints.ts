import { constructEndpoint } from "../../utils/construct-endpoint";
import { GetFileContentRequestModel } from "./dto/get-file-content-dto";
import { GetFolderFilesRequestModel } from "./dto/get-folder-files-dto";

enum ENDPOINTS {
  GET_CONTENT_BY_PATH = "/repos/{userName}/{repoName}/contents/{filePath}",
  GET_FOLDER_FILES = "/repos/{userName}/{repoName}/contents/{folderPath}",
}

export const GITHUB_ENDPOINTS = {
  GET_FILE_CONTENT: ({ path: pathParams }: GetFileContentRequestModel) =>
    constructEndpoint({
      endpoint: ENDPOINTS.GET_CONTENT_BY_PATH,
      pathParams,
    }),
  GET_FOLDER_FILES: ({ path: pathParams }: GetFolderFilesRequestModel) =>
    constructEndpoint({
      endpoint: ENDPOINTS.GET_FOLDER_FILES,
      pathParams,
    }),
};

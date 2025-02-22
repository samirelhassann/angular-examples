import { Injectable } from "@angular/core";

import axios, { AxiosInstance } from "axios";

import {
  GetFileContentRequestModel,
  GetFileContentResponseModel,
} from "./dto/get-file-content-dto";
import { GetFolderFilesRequestModel } from "./dto/get-folder-files-dto";
import { GITHUB_ENDPOINTS } from "./endpoints";

const BASE_URL = "https://api.github.com";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  public axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: "Bearer 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",
      },
    });
  }

  getFileContent(
    requestModel: GetFileContentRequestModel,
  ): Promise<GetFileContentResponseModel> {
    return this.axiosClient
      .get(GITHUB_ENDPOINTS.GET_FILE_CONTENT(requestModel))
      .then((response) => response.data);
  }

  getFolderFiles(
    requestModel: GetFolderFilesRequestModel,
  ): Promise<GetFileContentResponseModel[]> {
    return this.axiosClient
      .get(GITHUB_ENDPOINTS.GET_FOLDER_FILES(requestModel))
      .then((response) => response.data);
  }
}

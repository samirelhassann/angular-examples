import { Injectable } from "@angular/core";

import axios, { AxiosInstance } from "axios";
import { environment } from "src/environments/environment";

import {
  GetFileContentRequestModel,
  GetFileContentResponseModel,
} from "./dto/get-file-content-dto";
import {
  GetFolderFilesRequestModel,
  GetFolderFilesResponseModel,
} from "./dto/get-folder-files-dto";
import { GITHUB_ENDPOINTS } from "./endpoints";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  public axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: environment.github.host,
      headers: {
        Authorization: environment.github.token,
      },
    });
  }

  async getFileContent(
    requestModel: GetFileContentRequestModel,
  ): Promise<GetFileContentResponseModel> {
    return this.axiosClient
      .get(GITHUB_ENDPOINTS.GET_FILE_CONTENT(requestModel))
      .then((response) => response.data);
  }

  async getFolderFiles(
    requestModel: GetFolderFilesRequestModel,
  ): Promise<GetFolderFilesResponseModel> {
    return this.axiosClient
      .get(GITHUB_ENDPOINTS.GET_FOLDER_FILES(requestModel))
      .then((response) => response.data);
  }
}

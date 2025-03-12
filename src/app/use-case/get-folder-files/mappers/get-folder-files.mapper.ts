import { Injectable } from "@angular/core";

import { CodeFile, CodeFileType } from "@/domains/code-file";
import { GetFileContentRequestModel } from "@/services/github/dto/get-file-content-dto";
import { GetFolderFilesResponseModel } from "@/services/github/dto/get-folder-files-dto";

// eslint-disable-next-line import/no-cycle
import { GetFolderFilesUseCaseProps } from "../get-folder-files.use-case";

@Injectable({
  providedIn: "root",
})
export class GetFolderFilesMapper {
  toRequestModel(
    useCaseProps: GetFolderFilesUseCaseProps,
  ): GetFileContentRequestModel {
    const { folderPath, repoName, userName } = useCaseProps;

    return <GetFileContentRequestModel>{
      path: {
        folderPath,
        repoName,
        userName,
      },
    };
  }

  toDomain(serviceResponse: GetFolderFilesResponseModel): CodeFile[] {
    return serviceResponse.map((response) => {
      const { name, type, path } = response;

      return {
        name,
        path,
        type: type === "file" ? CodeFileType.FILE : CodeFileType.FOLDER,
      };
    });
  }
}

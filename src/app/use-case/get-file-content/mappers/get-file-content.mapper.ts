import { Injectable } from "@angular/core";

import { CodeFile, CodeFileType } from "@/domains/code-file";
import {
  GetFileContentRequestModel,
  GetFileContentResponseModel,
} from "@/services/github/dto/get-file-content-dto";

// eslint-disable-next-line import/no-cycle
import { GetFileContentUseCaseProps } from "../get-file-content.use-case";

@Injectable({
  providedIn: "root",
})
export class GetFileContentMapper {
  toRequestModel(
    useCaseProps: GetFileContentUseCaseProps,
  ): GetFileContentRequestModel {
    const { filePath, repoName, userName } = useCaseProps;

    return <GetFileContentRequestModel>{
      path: {
        filePath,
        repoName,
        userName,
      },
    };
  }

  toDomain(serviceResponse: GetFileContentResponseModel): CodeFile {
    const { content, name, type, path } = serviceResponse;

    return {
      name,
      path,
      type: type === "file" ? CodeFileType.FILE : CodeFileType.FOLDER,
      content,
    };
  }
}

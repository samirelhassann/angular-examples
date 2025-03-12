export interface CodeFile {
  name: string;
  path: string;
  type: CodeFileType;
  content?: string;
  children?: CodeFile[];
}

export enum CodeFileType {
  FILE = "file",
  FOLDER = "folder",
}

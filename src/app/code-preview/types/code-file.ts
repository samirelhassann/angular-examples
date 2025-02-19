export interface CodeFile {
  name: string;
  type: CodeFileType;
  content?: string;
  children?: CodeFile[];
}

export enum CodeFileType {
  FILE = "file",
  FOLDER = "folder",
}

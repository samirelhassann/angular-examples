import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { CodeFile } from "../../types/code-file";

@Component({
  selector: "app-file-explorer",
  standalone: false,
  templateUrl: "./file-explorer.component.html",
  styleUrl: "./file-explorer.component.scss",
})
export class FileExplorerComponent implements OnInit {
  @Input() files: CodeFile[] | undefined = [];
  @Input() selectedFile?: CodeFile;
  openFolders: Set<string> = new Set<string>();

  ngOnInit(): void {
    this.files?.forEach((file) => {
      if (file.type === "folder") {
        this.openFolders.add(file.name);
      }
    });
  }

  @Output() selectContentEmitt = new EventEmitter<CodeFile>();

  selectContent(file: CodeFile) {
    this.selectContentEmitt.emit(file);
  }

  toggleFolder(path: string): void {
    if (this.openFolders.has(path)) {
      this.openFolders.delete(path);
    } else {
      this.openFolders.add(path);
    }
  }

  isFolderOpen(path: string): boolean {
    return this.openFolders.has(path);
  }

  getPath(file: CodeFile, parentPath: string = ""): string {
    return parentPath ? `${parentPath}/${file.name}` : file.name;
  }

  getChevronName(file: string): string {
    return this.isFolderOpen(file) ? "ChevronDown" : "ChevronRight";
  }
}

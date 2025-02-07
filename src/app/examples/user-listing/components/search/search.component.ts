import { Component, EventEmitter, Output } from "@angular/core";

import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-search",
  standalone: false,
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
})
export class SearchComponent {
  inputText = "";
  isSearchFocused = false;
  hasInputtedText = false;

  @Output() searchInputtedEmitt = new EventEmitter<string>();

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(500))
      .subscribe((inputText: string) => {
        this.searchInputtedEmitt.emit(inputText);
      });
  }

  onSearchFocus(isFocus: boolean) {
    this.isSearchFocused = isFocus;
  }

  onSearchChange(inputText: string) {
    this.hasInputtedText = inputText.length > 0;
    this.searchSubject.next(inputText);
  }

  onClickClear() {
    this.inputText = "";
    this.hasInputtedText = false;
    this.searchSubject.next("");
  }
}

import { Injectable } from "@angular/core";

import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ObservableHandler {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  isLoading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  handle<T>(observable: Observable<T>): Observable<T> {
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    return observable.pipe(
      tap(() => this.loadingSubject.next(false)),
      catchError(() => {
        this.errorSubject.next("An error occurred while loading data.");
        this.loadingSubject.next(false);
        return of() as Observable<T>; // Retorna um observable vazio
      }),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}

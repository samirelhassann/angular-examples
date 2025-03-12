import { Injectable, OnDestroy } from "@angular/core";

import { BehaviorSubject, Observable, Subject } from "rxjs";
import { catchError, finalize, take } from "rxjs/operators";

export interface ServiceState<T> {
  data: T;
  isLoading: boolean;
  error: boolean;
  success: boolean;
  errorMessage: string | null;
}

@Injectable({
  providedIn: "root",
})
export class ObservableHandler implements OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  manage<T>(useCase: () => Observable<T>): Observable<ServiceState<T>> {
    const defaultValue = this.getDefaultValue<T>();

    const state$ = new BehaviorSubject<ServiceState<T>>({
      data: defaultValue,
      isLoading: true,
      error: false,
      success: false,
      errorMessage: null,
    });

    useCase()
      .pipe(
        take(1),
        catchError((error) => {
          state$.next({
            data: defaultValue,
            isLoading: false,
            error: true,
            success: false,
            errorMessage: error.message || "An error occurred",
          });
          return [];
        }),
        finalize(() => state$.next({ ...state$.value, isLoading: false })),
      )
      .subscribe((data) => {
        state$.next({
          data,
          isLoading: false,
          error: false,
          success: true,
          errorMessage: null,
        });
      });

    return state$.asObservable();
  }

  private getDefaultValue<T>(): T {
    return {} as T;
  }
}

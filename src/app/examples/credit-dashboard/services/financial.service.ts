import { Injectable } from "@angular/core";

import { delay, Observable, of } from "rxjs";

import { AccountBalances } from "../domain/available-balance";

@Injectable()
export class FinancialService {
  getFinancialData(): Observable<AccountBalances> {
    const mockData: AccountBalances = {
      checkingAccount: 200,
      checkingAccountLinkedBalance: 300,
      savingsAccountLinkedBalance: 400,
      investmentsWithAutoDebit: 500,
      investmentsWithoutAutoDebit: 500,
      totalBalance: 1000,
      availableForTransactions: 1000,
    };

    return of(mockData).pipe(delay(this.getRandomDelay()));
  }

  private getRandomDelay(): number {
    const minTime = 100;
    const maxTime = 3000;
    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  }
}

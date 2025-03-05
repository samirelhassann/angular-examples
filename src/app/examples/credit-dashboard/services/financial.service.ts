import { Injectable } from "@angular/core";

import { delay, Observable, of } from "rxjs";

import { AccountBalances } from "../domain/available-balance";
import { CreditCard } from "../domain/credit-card";

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

  getCreditCard(): Observable<CreditCard> {
    const mockData: CreditCard = {
      clientName: "John Doe",
      cardNumber: 1234567890123456,
      availableCredit: 1000,
      purchaseLimit: 5000,
      totalUsedLimit: 4000,
      withdrawalLimit: 1000,
    };

    return of(mockData).pipe(delay(this.getRandomDelay()));
  }

  private getRandomDelay(): number {
    const minTime = 100;
    const maxTime = 3000;
    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  }
}

export interface AccountBalances {
  checkingAccount: number;
  checkingAccountLinkedBalance: number;
  savingsAccountLinkedBalance: number;
  investmentsWithAutoDebit: number;
  investmentsWithoutAutoDebit: number;
  totalBalance: number;
  availableForTransactions: number;
}

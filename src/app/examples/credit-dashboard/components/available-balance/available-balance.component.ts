import { Component, OnInit } from "@angular/core";

import { FinancialService } from "../../services/financial.service";
import { FormattedInfoCard } from "../../types/formatted-info-card";
import { LoadingHandler } from "../../utils/loading-handler";

@Component({
  selector: "app-available-balance",
  standalone: false,
  templateUrl: "./available-balance.component.html",
  styleUrl: "./available-balance.component.scss",
})
export class FinancialCardComponent implements OnInit {
  infos: FormattedInfoCard[] = [];
  highlightInfos: FormattedInfoCard[] = [];
  totalBalance: number = 0;
  loadingHandler: LoadingHandler = new LoadingHandler();

  constructor(private financialService: FinancialService) {}

  ngOnInit() {
    this.getFinancialData();
  }

  getFinancialData() {
    this.loadingHandler.start();
    this.financialService.getFinancialData().subscribe((data) => {
      this.infos = [
        { label: "Checking Account", value: data.checkingAccount },
        {
          label: "Checking Account Linked Balance",
          value: data.checkingAccountLinkedBalance,
        },
        {
          label: "Savings Account Linked Balance",
          value: data.savingsAccountLinkedBalance,
        },
        {
          label: "Investments with Auto Debit",
          value: data.investmentsWithAutoDebit,
        },
        {
          label: "Investments without Auto Debit",
          value: data.investmentsWithoutAutoDebit,
        },
      ];

      this.highlightInfos = [
        { label: "Total Balance", value: data.totalBalance },
        {
          label: "Available for Transactions",
          value: data.availableForTransactions,
        },
      ];

      this.totalBalance = data.totalBalance;

      this.loadingHandler.finish();
    });
  }
}

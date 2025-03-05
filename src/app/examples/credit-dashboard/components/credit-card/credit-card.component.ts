import { Component, OnInit } from "@angular/core";

import { FinancialService } from "../../services/financial.service";
import { FormattedInfoCard } from "../../types/formatted-info-card";
import { LoadingHandler } from "../../utils/loading-handler";

const LOADING_QUANTITY = 4;

@Component({
  selector: "app-credit-card",
  standalone: false,

  templateUrl: "./credit-card.component.html",
  styleUrl: "./credit-card.component.scss",
})
export class CreditCardComponent implements OnInit {
  loadingQuantity = Array.from({ length: LOADING_QUANTITY });

  infos: FormattedInfoCard[] = [];
  highlightInfos: FormattedInfoCard[] = [];
  clientName: string = "";
  cardNumber: number = 0;
  loadingHandler: LoadingHandler = new LoadingHandler();

  constructor(private financialService: FinancialService) {}

  ngOnInit() {
    this.getFinancialData();
  }

  getFinancialData() {
    this.loadingHandler.start();
    this.financialService.getCreditCard().subscribe((data) => {
      const {
        cardNumber,
        clientName,
        availableCredit,
        purchaseLimit,
        totalUsedLimit,
        withdrawalLimit,
      } = data;

      this.infos = [
        {
          label: "Purchase limit",
          value: purchaseLimit,
        },
        {
          label: "Available",
          value: availableCredit,
        },
        {
          label: "Withdraw limit",
          value: withdrawalLimit,
        },
        {
          label: "Total Limit Used",
          value: totalUsedLimit,
        },
      ];

      this.cardNumber = cardNumber;
      this.clientName = clientName;

      this.loadingHandler.finish();
    });
  }
}

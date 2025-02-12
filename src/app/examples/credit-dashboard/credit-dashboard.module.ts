import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FinancialCardComponent } from "./components/available-balance/available-balance.component";
import { CardRowComponent } from "./components/card-row/card-row.component";
import { FormatRowCardValuePipe } from "./components/card-row/pipes/format-row-card-value.pipe";
import { CardWrapperComponentModule } from "./components/card-wrapper/card-wrapper.module";

import { CreditDashboardComponent } from "./credit-dashboard.component";
import { FinancialService } from "./services/financial.service";
import { LoadingHandler } from "./utils/loading-handler";

@NgModule({
  declarations: [
    CreditDashboardComponent,
    FinancialCardComponent,
    CardRowComponent,

    FormatRowCardValuePipe,
  ],
  providers: [FinancialService, LoadingHandler],
  imports: [CommonModule, CardWrapperComponentModule],
})
export class CreditDashBoardModule {}

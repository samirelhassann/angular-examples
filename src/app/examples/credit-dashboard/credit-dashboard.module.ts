import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {
  CreditCard,
  HandCoins,
  Loader,
  LucideAngularModule,
  User,
} from "lucide-angular";

import { FinancialCardComponent } from "./components/available-balance/available-balance.component";
import { CardHeaderComponent } from "./components/card-header/card-header.component";
import { CardRowLoadingComponent } from "./components/card-row-loading/card-row-loading.component";
import { CardRowComponent } from "./components/card-row/card-row.component";
import { FormatRowCardValuePipe } from "./components/card-row/pipes/format-row-card-value.pipe";
import { CardComponent } from "./components/card/card.component";
import { CreditCardComponent } from "./components/credit-card/credit-card.component";
import { SkeletonComponent } from "./components/skeleton/skeleton.component";

import { CreditDashboardComponent } from "./credit-dashboard.component";
import { CardNumberFormatPipe } from "./pipes/card-number-format.pipe";
import { FinancialService } from "./services/financial.service";

@NgModule({
  declarations: [
    CreditDashboardComponent,
    FinancialCardComponent,
    CardRowComponent,
    CardComponent,
    CardHeaderComponent,

    FormatRowCardValuePipe,
    CreditCardComponent,
    CardNumberFormatPipe,
    CardRowLoadingComponent,
    SkeletonComponent,
  ],
  providers: [FinancialService],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      HandCoins,
      Loader,
      CreditCard,
      User,
    }),
  ],
})
export class CreditDashBoardModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";

import { CreditCardsModule } from "./credit-cards/credit-cards.module";
import { LoginFormComponent } from "./login-form/login-form.component";

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    CreditCardsModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
  ],
})
export class ComponentsModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { GetUsersUseCase } from "./get-file-content/get-users.use-case";

@NgModule({
  providers: [GetUsersUseCase],
  imports: [CommonModule],
})
export class UseCasesModule {}

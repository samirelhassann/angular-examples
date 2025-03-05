import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { ProgressBarComponent } from "./components/header/components/progress-bar/progress-bar.component";
import { HeaderComponent } from "./components/header/header.component";
import { InputComponent } from "./components/input/input.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { Step1Component } from "./components/step-1/step-1.component";
import { Step2Component } from "./components/step-2/step-2.component";

import { MultiStepFormComponent } from "./multi-step-form.component";

@NgModule({
  declarations: [
    MultiStepFormComponent,
    HeaderComponent,
    ProgressBarComponent,
    SideBarComponent,
    Step1Component,
    Step2Component,
    InputComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class MultiStepFormModule {}

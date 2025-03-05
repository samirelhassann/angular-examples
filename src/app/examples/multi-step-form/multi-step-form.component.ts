/* eslint-disable no-console */
import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import {
  AddressInfoSchema,
  addressInfoSchema,
  BasicInfoSchema,
  basicInfoSchema,
} from "./form-schema";
import { Step } from "./types/step";

@Component({
  selector: "app-multi-step-form",
  standalone: false,
  templateUrl: "./multi-step-form.component.html",
  styleUrls: ["./multi-step-form.component.scss"],
})
export class MultiStepFormComponent {
  steps: Step[] = [
    {
      step: 1,
      title: "Basic Informations",
      subTitle: "Enter here your basic informations",
    },
    {
      step: 2,
      title: "Address Information",
      subTitle: "Enter here your address informations",
    },
  ];

  actualStep: Step = this.steps[0];
  currentStep: number = 1;
  isFirstStep: boolean = true;
  isLastStep: boolean = false;
  formGroups: FormGroup[];
  isCurrentStepValid: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formGroups = [
      this.fb.group(<BasicInfoSchema>{
        name: "",
        lastName: "",
        email: "",
      }),
      this.fb.group(<AddressInfoSchema>{
        address: "",
        additionalAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      }),
    ];

    this.formGroups.forEach((formGroup, index) => {
      formGroup.statusChanges.subscribe((status) => {
        if (index === this.currentStep - 1) {
          this.isCurrentStepValid = status === "VALID";
        }
      });
    });

    this.updateStepState();
  }

  changeCurrentStep(step: number): void {
    const isNext = step > this.currentStep;
    if (isNext) {
      if (!this.validateCurrentStep()) {
        return;
      }
    }

    this.currentStep = step;
    this.updateStepState();
  }

  private updateStepState(): void {
    this.actualStep = this.steps[this.currentStep - 1];
    this.isFirstStep = this.currentStep === 1;
    this.isLastStep = this.currentStep === this.steps.length;
    this.isCurrentStepValid = this.formGroups[this.currentStep - 1].valid;
  }

  validateCurrentStep(): boolean {
    const currentData = this.formGroups[this.currentStep - 1].value;
    const schemas = [basicInfoSchema, addressInfoSchema];
    const validation = schemas[this.currentStep - 1].safeParse(currentData);

    if (!validation.success) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation.error.errors.forEach((err: any) => {
        const control = this.formGroups[this.currentStep - 1].get(err.path[0]);
        if (control) {
          control.setErrors({ zod: err.message });
        }
      });
      return false;
    }
    return true;
  }

  submit() {
    const allData = this.formGroups.reduce((acc, formGroup) => {
      return { ...acc, ...formGroup.value };
    }, {});
    console.log("Form Data:", allData);
  }
}

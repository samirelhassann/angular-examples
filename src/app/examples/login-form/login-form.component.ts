import { Component } from "@angular/core";

@Component({
  selector: "app-login-form",
  standalone: false,
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.scss",
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";

  emailValidationError: string = "";
  passwordValidationError: string = "";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  emailChanged(_value: string) {
    if (this.emailValidationError) {
      this.emailValidationError = "";
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  passwordChanged(_value: string) {
    if (this.passwordValidationError) {
      this.passwordValidationError = "";
    }
  }

  onSubmit() {
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    // eslint-disable-next-line no-console
    console.log("• [LOG] - login");
  }

  private validateEmail() {
    const isEmailFilled = this.email.length > 0;
    if (!isEmailFilled) {
      this.emailValidationError = "Email is required";
      return false;
    }

    const isEmailValid = this.email.includes("@");
    if (!isEmailValid) {
      this.emailValidationError = "Email is invalid";
      return false;
    }

    return true;
  }

  private validatePassword() {
    const isPasswordFilled = this.password.length > 0;
    if (!isPasswordFilled) {
      this.passwordValidationError = "Password is required";
      return false;
    }

    const isPasswordValid = this.password.length > 6;
    if (!isPasswordValid) {
      this.passwordValidationError = "Password must be at least 6 characters";
      return false;
    }

    return true;
  }
}

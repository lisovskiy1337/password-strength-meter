import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  strength: string = '';
  showPassword: boolean = false;

  getStrength(password: string): void {
    const hasLetters = /[A-Za-z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);

    if (password.length > 8) {
      if (!hasLetters || !hasDigits || !hasSymbols) {
        this.strength = 'weak';
      }
      if (
        (hasLetters && hasSymbols) ||
        (hasLetters && hasDigits) ||
        (hasDigits && hasSymbols)
      ) {
        this.strength = 'medium';
      }
      if (hasLetters && hasDigits && hasSymbols) {
        this.strength = 'strong';
      }
    } else if (password.length > 0) {
      this.strength = 'short';
    } else {
      this.strength = '';
    }
  }

  handleChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.getStrength(inputValue);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

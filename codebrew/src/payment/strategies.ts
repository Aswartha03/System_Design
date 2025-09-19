import { PaymentStrategy } from "./paymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    let fee = 10;
    let totalAmount = amount + fee;
    console.log(
      `Payment Done using CreditCardPayment and Total amount is: ${totalAmount}`
    );
  }
}

export class DigitalWalletPayment implements PaymentStrategy {
  pay(amount: number): void {
    let fee = 30;
    let totalAmount = amount + fee;
    console.log(
      `Payment Done using DigitalWalletPayment and Total amount is: ${totalAmount}`
    );
  }
}

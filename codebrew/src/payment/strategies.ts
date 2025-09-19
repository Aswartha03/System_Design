import { Coffee } from "../decorator/types";
import { PaymentStrategy } from "./paymentStrategy";

export class CreditCardPayment implements PaymentStrategy {
  pay(coffee:Coffee): void {
    let fee = 10;
    let totalAmount = coffee.getCost() + fee;
    console.log(
      `Payment Done using CreditCardPayment and Total amount is: ${totalAmount},Coffee is : ${coffee.getDescription()}`
    );
  }
}

export class DigitalWalletPayment implements PaymentStrategy {
  pay(coffee:Coffee): void {
    let fee = 30;
    let totalAmount = coffee.getCost() + fee;
    console.log(
      `Payment Done using DigitalWalletPayment and Total amount is: ${totalAmount} , Coffe is : ${coffee.getDescription()}`
    );
  }
}

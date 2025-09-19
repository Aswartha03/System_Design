"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalWalletPayment = exports.CreditCardPayment = void 0;
class CreditCardPayment {
    pay(coffee) {
        let fee = 10;
        let totalAmount = coffee.getCost() + fee;
        console.log(`Payment Done using CreditCardPayment and Total amount is: ${totalAmount},Coffee is : ${coffee.getDescription()}`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
class DigitalWalletPayment {
    pay(coffee) {
        let fee = 30;
        let totalAmount = coffee.getCost() + fee;
        console.log(`Payment Done using DigitalWalletPayment and Total amount is: ${totalAmount} , Coffe is : ${coffee.getDescription()}`);
    }
}
exports.DigitalWalletPayment = DigitalWalletPayment;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalWalletPayment = exports.CreditCardPayment = void 0;
class CreditCardPayment {
    pay(amount) {
        let fee = 10;
        let totalAmount = amount + fee;
        console.log(`Payment Done using CreditCardPayment and Total amount is: ${totalAmount}`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
class DigitalWalletPayment {
    pay(amount) {
        let fee = 30;
        let totalAmount = amount + fee;
        console.log(`Payment Done using DigitalWalletPayment and Total amount is: ${totalAmount}`);
    }
}
exports.DigitalWalletPayment = DigitalWalletPayment;

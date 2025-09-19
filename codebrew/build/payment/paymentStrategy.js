"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(paymentype) {
        this.paymentType = paymentype;
    }
    processPayment(coffee) {
        this.paymentType.pay(coffee);
    }
    setPayment(paymentType) {
        this.paymentType = paymentType;
    }
}
exports.Payment = Payment;

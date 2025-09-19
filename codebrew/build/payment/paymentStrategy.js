"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(paymentype) {
        this.paymentType = paymentype;
    }
    processPayment(amount) {
        this.paymentType.pay(amount);
    }
    setPayment(paymentType) {
        this.paymentType = paymentType;
    }
}
exports.Payment = Payment;

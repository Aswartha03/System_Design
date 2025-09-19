"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = void 0;
const paymentStrategy_1 = require("../payment/paymentStrategy");
const strategies_1 = require("../payment/strategies");
const mainClass_1 = require("../statePattern.ts/mainClass");
const states_1 = require("../statePattern.ts/states");
// import { Order } from "../statePattern.ts/types";
class OrderManager {
    constructor() {
        this.allOrders = [];
    }
    putOrder(coffee) {
        console.log("Order Received");
        this.allOrders.push(coffee);
        this.makeAllOrders();
        this.makePayments();
    }
    makeAllOrders() {
        for (let coffee of this.allOrders) {
            let coffee = new mainClass_1.MainStateClass(new states_1.Pending());
            coffee.processToNext();
        }
    }
    makePayments() {
        for (let coffee of this.allOrders) {
            let myPayment = new paymentStrategy_1.Payment(new strategies_1.CreditCardPayment());
            myPayment.processPayment(coffee.getCost());
        }
    }
}
exports.OrderManager = OrderManager;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManager = void 0;
class OrderManager {
    constructor() {
        this.allOrders = [];
    }
    putOrder(coffee) {
        this.allOrders.push(coffee);
    }
}
exports.OrderManager = OrderManager;

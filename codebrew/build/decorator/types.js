"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toppings = exports.Coffee = void 0;
class Coffee {
}
exports.Coffee = Coffee;
class Toppings extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee;
    }
}
exports.Toppings = Toppings;

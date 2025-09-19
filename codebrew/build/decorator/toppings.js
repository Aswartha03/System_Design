"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaramlSyrup = exports.Milk = void 0;
const types_1 = require("./types");
class Milk extends types_1.Toppings {
    getCost() {
        return this.getCost() + 10;
    }
    getDescription() {
        return this.getDescription() + " + Milk";
    }
}
exports.Milk = Milk;
class CaramlSyrup extends types_1.Toppings {
    getCost() {
        return this.getCost() + 20;
    }
    getDescription() {
        return this.getDescription() + " + CaramelSyrup";
    }
}
exports.CaramlSyrup = CaramlSyrup;

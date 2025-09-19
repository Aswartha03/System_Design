"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaramlSyrup = exports.Milk = void 0;
const types_1 = require("./types");
class Milk extends types_1.Toppings {
    getCost() {
        return this.coffee.getCost() + 10;
    }
    getDescription() {
        return this.coffee.getDescription() + " + Milk";
    }
}
exports.Milk = Milk;
class CaramlSyrup extends types_1.Toppings {
    getCost() {
        return this.coffee.getCost() + 20;
    }
    getDescription() {
        return this.coffee.getDescription() + " + CaramelSyrup";
    }
}
exports.CaramlSyrup = CaramlSyrup;

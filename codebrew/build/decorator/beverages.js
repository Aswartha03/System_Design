"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Latte = exports.Espresso = void 0;
const types_1 = require("./types");
class Espresso extends types_1.Coffee {
    getCost() {
        return 40;
    }
    getDescription() {
        return "Espresso";
    }
}
exports.Espresso = Espresso;
class Latte extends types_1.Coffee {
    getCost() {
        return 50;
    }
    getDescription() {
        return "Latte";
    }
}
exports.Latte = Latte;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beverages_1 = require("./decorator/beverages");
const toppings_1 = require("./decorator/toppings");
const orderManager_1 = require("./singleton.ts/orderManager");
let myCoffee = new toppings_1.CaramlSyrup(new toppings_1.Milk(new beverages_1.Espresso));
let orderManager = new orderManager_1.OrderManager();
orderManager.putOrder(myCoffee);

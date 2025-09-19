import { Espresso } from "./decorator/beverages";
import { CaramlSyrup, Milk } from "./decorator/toppings";
import { OrderManager } from "./singleton.ts/orderManager";

let myCoffee = new CaramlSyrup(new Milk (new Espresso))

let orderManager = new OrderManager()
orderManager.putOrder(myCoffee)

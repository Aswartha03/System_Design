import { Toppings } from "./types";

export class Milk extends Toppings {
  getCost(): number {
    return this.coffee.getCost() + 10;
  }
  getDescription(): string {
    return this.coffee.getDescription() + " + Milk";
  }
}

export class CaramlSyrup extends Toppings {
  getCost(): number {
    return this.coffee.getCost() + 20;
  }
  getDescription(): string {
    return this.coffee.getDescription() + " + CaramelSyrup";
  }
}

import { Toppings } from "./types";

export class Milk extends Toppings {
  getCost(): number {
    return this.getCost() + 10;
  }
  getDescription(): string {
    return this.getDescription() + " + Milk";
  }
}

export class CaramlSyrup extends Toppings {
  getCost(): number {
    return this.getCost() + 20;
  }
  getDescription(): string {
    return this.getDescription() + " + CaramelSyrup";
  }
}

import { Coffee } from "./types";

export class Espresso extends Coffee {
  getCost(): number {
    return 40;
  }
  getDescription(): string {
    return "Espresso";
  }
}

export class Latte extends Coffee {
  getCost(): number {
    return 50;
  }
  getDescription(): string {
    return "Latte";
  }
}

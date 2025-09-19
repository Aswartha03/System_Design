export abstract class Coffee {
  abstract getCost(): number;
  abstract getDescription(): string;
}
export abstract class Toppings extends Coffee {
  coffee: Coffee;
  constructor(coffee: Coffee) {
    super();
    this.coffee = coffee;
  }
  abstract getCost(): number;
  abstract getDescription(): string;
}

// https://en.wikipedia.org/wiki/Decorator_pattern

// Component interface
interface Coffee {
  cost(): number;
  description(): string;
}

// ConcreteComponent class
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Simple Coffee';
  }
}

// Decorator abstract class
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

// ConcreteDecorator classes
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return this.coffee.description() + ', Milk';
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }

  description(): string {
    return this.coffee.description() + ', Sugar';
  }
}

// Client code
const simpleCoffee: Coffee = new SimpleCoffee();
console.log(`Cost: $${simpleCoffee.cost()}, Description: ${simpleCoffee.description()}`);

const milkCoffee: Coffee = new MilkDecorator(simpleCoffee);
console.log(`Cost: $${milkCoffee.cost()}, Description: ${milkCoffee.description()}`);

const sugarMilkCoffee: Coffee = new SugarDecorator(milkCoffee);
console.log(`Cost: $${sugarMilkCoffee.cost()}, Description: ${sugarMilkCoffee.description()}`);

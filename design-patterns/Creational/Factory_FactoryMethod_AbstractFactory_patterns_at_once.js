//
// Factory pattern part
//

// Product interface
class Product {
  constructor(name) {
    this.name = name;
  }
  operate() {
    console.log(this.name ? `${this.name} product is operating` : "Product is operating");
  }
}

// ConcreteProduct
class ConcreteProduct extends Product {
  operate() {
    console.log(`ConcreteProduct ${this.name} is operating`);
  }
}

// Factory interface
class Factory {
  createProduct() {
    throw new Error("This method should be overridden by subclasses");
  }
}

// ConcreteFactory
class SimpleConcreteFactory extends Factory {
  createProduct() {
    return new ConcreteProduct('X');
  }
}

function testFactoryPattern() {
  // Client code
  const simpleFactory = new SimpleConcreteFactory();
  const product = simpleFactory.createProduct();
  product.operate();
}
testFactoryPattern();

//
// Factory Method pattern part
//

// Creator (abstract class)
class Creator {
  factoryMethodToGetConcreteProduct() {
    throw new Error("This method should be overridden by subclasses");
  }

  operation() {
    const product = this.factoryMethodToGetConcreteProduct();
    product.operate();
  }
}

// ConcreteCreator
class ConcreteCreator extends Creator {
  factoryMethodToGetConcreteProduct() {
    return new ConcreteProduct("Y");
  }
}

function testFactoryMethodPattern() {
  // Client code
  const creator = new ConcreteCreator();
  creator.operation();
}
testFactoryMethodPattern();

//
// Abstract Factory pattern part
//

// AbstractProductA
class AbstractProductA {
  use() {
    console.log("AbstractProductA is being used");
  }
}

// ConcreteProductA
class ConcreteProductA extends AbstractProductA { }

// AbstractProductB
class AbstractProductB {
  consume() {
    console.log("AbstractProductB is being consumed");
  }
}

// ConcreteProductB
class ConcreteProductB extends AbstractProductB { }

// AbstractFactory
class AbstractFactory {
  createProductA() {
    throw new Error("This method should be overridden by subclasses");
  }

  createProductB() {
    throw new Error("This method should be overridden by subclasses");
  }
}

// ConcreteFactory
class ConcreteFactoryOfMultipleProducts extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA();
  }

  createProductB() {
    return new ConcreteProductB();
  }
}

function testAbstractFactoryPattern() {
  // Client code
  const concreteFactory = new ConcreteFactoryOfMultipleProducts();
  const productA = concreteFactory.createProductA();
  const productB = concreteFactory.createProductB();

  productA.use();
  productB.consume();
}
testAbstractFactoryPattern();

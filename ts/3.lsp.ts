// **Liskov Substitution Principle (LSP)**
// - Objects of a base class should be replaceable with objects of a derived class without affecting the correctness of the program. 
// - This is achieved by ensuring that derived classes honor the contracts established by the base class.

// Without LSP
class Bird {
  fly() {
    // Fly logic
  }
}

class Ostrich extends Bird {
  // Ostrich can't fly, violates LSP
}

// With LSP
abstract class BirdLSP {
  abstract move(): void;
}

class FlyingBird extends BirdLSP {
  fly() {
    console.log("FlyingBird fly()");
  }

  move() {
    console.log("FlyingBird move()");
    this.fly();
  }
}

class NonFlyingBird extends BirdLSP {
  move() {
    console.log("NonFlyingBird move(): No fly method for birds that can't fly")
  }
}

function makeBirdMove(bird: BirdLSP): void {
  bird.move();
}

function testLSP() {
  const flyingBird = new FlyingBird();
  const nonFlyingBird = new NonFlyingBird();
  makeBirdMove(flyingBird); // Output: Bird is flying
  makeBirdMove(nonFlyingBird); // Output: Bird is moving on the ground
}
// testLSP();

// ChatGPT
// the Set and Map objects in JavaScript do adhere to the Liskov Substitution Principle (LSP).
// Both Set and Map implement the common Iterable interface, allowing them to be used interchangeably in contexts that expect iterable objects.

function testSetMap_V1() {
  // Using Set
  const setInstance = new Set([1, 2, 3]);

  // Using Map
  const mapInstance = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);

  // Both Set and Map are iterable
  for (const value of setInstance) {
    console.log(value);
  }

  for (const [key, value] of mapInstance) {
    console.log(`${key}: ${value}`);
  }
}
// testSetMap_V1();

function testSetMap_V2() {
  // Using Map
  // const map = new Map([
  //   ['a', 1],
  //   ['b', 2],
  //   ['c', 3]
  // ]);

  // Attempting to use Set in a similar context
  // const set = new Set([1, 2, 3]);

  // error TS2488: Type 'number' must have a '[Symbol.iterator]()' method that returns an iterator.
  // for (const [key, value] of set) {
  //   console.log(`${key}: ${value}`);
  // }
}

// More about Iterators look in sandbox_js/es6/es6_iterators.ts

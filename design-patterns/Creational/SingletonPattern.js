// https://www.patterns.dev/vanilla/singleton-pattern
// https://refactoring.guru/design-patterns/singleton

//
// "Singleton" pattern
//
// Object :: A class with only a single instance with global access points.
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
// BRIGHT example any kind of shared Storage.
// https://developer.mozilla.org/en-US/docs/Web/API/StorageManager
// https://github.com/tzeikob/javascript-patterns/tree/main/creational/singleton
// You can thing of this pattern also as a factory but that factory
const mySingletonObj = (function () {
  console.log('singleton object init');
  let instance;

  const createInstance = function () {
    return new Object("I am the instance");
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})(); // self executive function here to create a shared Object instance for later usage

function testSingletonObject() {
  const instance1 = mySingletonObj.getInstance();
  const instance2 = mySingletonObj.getInstance();
  console.log("instance1 and instance2 is same instance? " + (instance1 === instance2));
}
testSingletonObject();

class MyStrangeSingletonClass {
  #height = 0; // private
  #width = 0; // private
  a = 1; // public (default value if no constructor executed)
  b = 1; // public

  constructor(a = 2, b = 2) {
    this.a = a;
    this.b = b;
    // this.a = Math.random(); // public via this.
    // this.b = Math.random(); // public via this.
  }

  getInstance() { // regular class method - not Singleton behavior.
    if (this.hasOwnProperty('a') && this.hasOwnProperty('b')) {
      return this;
    } else {
      this.a = Math.random();
      this.b = Math.random();
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties
  static geMySomething() { // static class method - kinda Singleton behavior
    if (this.hasOwnProperty('a') && this.hasOwnProperty('b')) {
      console.log(this);
      return this;
    } else {
      this.a = Math.random();
      this.b = Math.random();
    }
  }
}
function testSingletonClass() {
  const instance1 = MyStrangeSingletonClass.geMySomething();
  console.log('instance1: ', instance1);
  // undefined (because there was no construction via new operator)

  const instance2 = new MyStrangeSingletonClass(3, 3);
  console.log('instance2 => ', instance2);
  // { a: 1, b: 1 } - if constructor implemented
  // { a: 2, b: 2 } - if constructor executed with no data
  // { a: 3, b: 3 } - when constructor executed with 3 and 3.
  console.log('instance2.getInstance() => ', instance2.getInstance());
  // { a: 1, b: 1 }
  console.log('instance2 === instance2.getInstance() ? => ', instance2 === instance2.getInstance());
  // =>  true
}
// testSingletonClass();

//
// Should we use Object.freeze() when create singleton object?
// https://www.freecodecamp.org/news/javascript-design-patterns-explained/
//

function testBetterSingletonClass() {
  // Taken from here: https://www.patterns.dev/vanilla/singleton-pattern

  let externalInstance;
  let externalCounterValue = 0;

  class Counter {
    constructor() {
      if (externalInstance) {
        throw new Error("You can only create one instance!");
      }
      externalInstance = this;
    }

    getInstance() {
      return this;
    }

    getCount() {
      return externalCounterValue;
    }

    increment() {
      return ++externalCounterValue;
    }

    decrement() {
      return --externalCounterValue;
    }
  }

  // const singletonCounter = new Counter(); // will be possible to set new fields
  const singletonCounter = Object.freeze(new Counter()); // not possible to set new fields

  console.log('Frozen object as instance from Counter Singleton Class', singletonCounter);
  // {}
  console.log('externalCounterValue: ', externalCounterValue);
  // externalCounterValue:  0

  singletonCounter.increment();
  console.log('Frozen Counter object instance after increment()', singletonCounter);
  // {}
  console.log('externalCounterValue: ', externalCounterValue);
  // externalCounterValue:  1

  singletonCounter.newField = 'Hello';
  console.log('Attempt to change', singletonCounter);
  // still {}
}
// testBetterSingletonClass();

// https://www.patterns.dev/vanilla/prototype-pattern
// https://refactoring.guru/design-patterns/prototype

//
// "Prototype" pattern.
//
// https://github.com/tzeikob/javascript-patterns/tree/1st-ed/creational/prototype
// "is based on the built-in prototype feature of the language. That pattern gives you the option
// to organize and structure your code into reusable containers having state and behavior,
// in an almost similar way classes are for the classical object-oriented languages."
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript
// Object :: A fully initialized instance used for copying or cloning.
// "The GoF refer to the prototype pattern as one which creates objects based on a template of an existing object through cloning."
// "A fully initialized instance used for copying or cloning."
// "Not only is the pattern an easy way to implement inheritance, but it can also come with a performance boost as well:
// when defining a function in an object, they're all created by reference (so all child objects point to the same function)
// instead of creating their own individual copies."
function PrototypePattern() {
  console.log('PrototypePattern ...');

  function approach1() {
    console.log('\nPrototypePattern - approach1() ...');

    var vehicle = {
      getModel: function () {
        console.log("The model of this vehicle is.." + this.model);
      }
    };

    var car = Object.create(vehicle, {
      "id": {
        value: 123,
        // writable:false, configurable:false by default
        enumerable: true
      },

      "model": {
        value: "Ford",
        enumerable: true
      }
    });
    console.log("car Object instanced (created on top of literal vehicle object)", car);
    console.log("car Object.getOwnPropertyNames(): ", Object.getOwnPropertyNames(car));
    console.log('car Object.keys(): ', Object.keys(car));
    console.log('car Reflect.ownKeys(): ', Reflect.ownKeys(car));
  }

  approach1();

  function approach2() {
    console.log('\nPrototypePattern - approach2() ...');

    var vehiclePrototype = {
      init: function (carModel) {
        this.model = carModel;
      },

      getModel: function () {
        console.log("The model of this vehicle is " + this.model);
      }
    };

    function createVehicle(model) {
      function Ford() { };
      Ford.prototype = vehiclePrototype;

      var fordVehicle = new Ford();
      fordVehicle.init(model);

      return fordVehicle;
    }

    var car = createVehicle("Escort");
    car.getModel();
    console.log('car created from Ford() function which prototype is vehiclePrototype object', car);
  }

  approach2();

  function approach3_ES6_Plus() {
    console.log('\nPrototypePattern - approach3() ...');

    class Dog {
      constructor(name) {
        this.name = name;
      }

      bark() {
        console.log(`${this.name}: Woof!`);
      }
    }

    const dogMax = new Dog("Max");
    console.log(dogMax);

    console.log(Dog.prototype);
    // constructor: ƒ Dog(name) bark: ƒ bark()
    console.log(dogMax.__proto__);
    // constructor: ƒ Dog(name) bark: ƒ bark()
    console.log(Dog.prototype === dogMax.__proto__);
    // true

    Dog.prototype.play = function () {
      console.log(`${this.name}: Playing!`);
    };
    const dogDaisy = new Dog("Daisy");
    console.log(dogDaisy);
    dogDaisy.play();

    class SuperDog extends Dog {
      constructor(name) {
        super(name);
      }

      fly() {
        console.log(`${this.name}: Flying!`);
      }
    }

    const dogCrypto = new SuperDog("Cryptonit");
    dogCrypto.bark();
    dogCrypto.play();
    dogCrypto.fly();
  }

  approach3_ES6_Plus();
}

PrototypePattern();

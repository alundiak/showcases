//
// CREATIONAL PATTERNS (initial list taken from designpatternscard.pdf)
//

//
// "Constructor" pattern - non-GoF
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
// Object constructors are used to create specific types of objects - both preparing the object for use and accepting
// arguments which a constructor can use to set the values of member properties and methods when the object is first created.
//
var ConstructorPattern = function () {
  // Each of the following options will create a new empty object:
  var newObject = {};
  // or
  var newObject = Object.create(Object.prototype);
  // or
  var newObject = new Object(); // so far this one is the most "constructor-ish" approach (meaning new + Function/Object ()).

  //
  // Example - of how we can use Function, prototype, new, public fields and this way "construct" a final object/instance.
  //
  function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
  // Note here that we are using Object.prototype.newMethod rather than
  // Object.prototype so as to avoid redefining the prototype object
  Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
  // Usage:
  var civic = new Car("Honda Civic", 2009, 20000);
  var mondeo = new Car("Ford Mondeo", 2010, 5000);
  console.log(civic.toString());
  console.log(mondeo.toString());
  //
  //
  //
}

//
// "Prototype" pattern.
//
// https://github.com/tzeikob/javascript-patterns/tree/main/creational/prototype
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
var PrototypePattern = function () {
  function approach1() {
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
    console.log(car);
  }
  approach1();

  function approach2() {
    var vehiclePrototype = {
      init: function (carModel) {
        this.model = carModel;
      },

      getModel: function () {
        console.log("The model of this vehicle is " + this.model);
      }
    };

    function vehicle(model) {
      function F() { };
      F.prototype = vehiclePrototype;

      var f = new F();

      f.init(model);
      return f;
    }

    var car = vehicle("Ford Escort");
    car.getModel();
    console.log(car);
  }
  approach2();
}
// PrototypePattern();

//
// "Class" pattern. non-GoF
//
// https://github.com/tzeikob/javascript-patterns/tree/main/creational/class
/*
is based on the built-in class feature of the language added in ECMAScript 2015.
That pattern gives you the option to organize and structure your code into reusable containers having state and behavior,
in an almost similar way classes are for the classical object-oriented languages.
*/


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
})(); // not sure why they suggest self executive function here...

function run() {
  const instance1 = mySingletonObj.getInstance();
  const instance2 = mySingletonObj.getInstance();
  console.log("Same instance? " + (instance1 === instance2));
}
// run();

class MySingletonClass {
  #height = 0; // private
  #width = 0; // private
  a = 1; // public (default value if no constructor executed)
  b = 1; // public

  constructor({ a = 2, b = 2 }) {
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
function run2() {
  const instance1 = MySingletonClass.geMySomething();
  console.log(instance1);
  // const instance2 = new MySingletonClass(2, 3);
  // console.log(instance2, instance2.getInstance(), instance2 === instance2.getInstance());
}
// run2();

//
// Should we use Object.freeze() when create singleton object?
// https://www.freecodecamp.org/news/javascript-design-patterns-explained/
//


//
// "Module" pattern
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
/*
- is based in part on object LITERALs
- "In JavaScript, the Module pattern is used to further emulate the concept of classes
in such a way that we're able to include both public/private methods and variables inside a single object"
- "The Module pattern encapsulates "privacy", state and organization using closures."
- "only a public API is returned, keeping everything else within the closure private."
*/
// https://github.com/tzeikob/javascript-patterns/tree/main/creational/module
/*
- "this pattern in a more abstract way as a factory of objects, where you can use it like
an isolated module which actually closing around a specific lexical scope, in order to encapsulate an internal state."
- "Nothing prevents you from creating multiple instances of that module, but each one of that instances will have its own internal state,
so it's smart to use that pattern as a singleton object."
*/
// My words: Module is a "big" Singleton.
var ModulePattern = function () {

  var testModule = (function () {
    var counter = 0;

    return {
      incrementCounter: function () {
        return counter++;
      },

      resetCounter: function () {
        console.log("counter value prior to reset: " + counter);
        counter = 0;
      }
    };

  })();

  // Usage:

  // Increment our counter
  testModule.incrementCounter();

  // Check the counter value and reset
  // Outputs: counter value prior to reset: 1
  testModule.resetCounter();
}

//
// "Factory" pattern
//
// https://github.com/tzeikob/javascript-patterns/tree/main/creational/factory
// "It encapsulates and organizes reusable modules or functionality, in a way they are cached and exposed publicly
// into a vocabulary of terms, so you can ask for them and get them on demand."
// MY COMMENT: I THINK THAT @tzeikob EXAMPLE IS WRONG - it's not factory but simple Module-like object created via for loop.
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
// "it doesn't explicitly require us to use a constructor"
// "Instead, a Factory can provide a generic interface for creating objects,
// where we can specify the type of factory object we wish to be created."

var FactoryPattern = function () {
  function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
  }

  function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  }

  function VehicleFactory() { }
  VehicleFactory.prototype.vehicleClass = Car;
  VehicleFactory.prototype.createVehicle = function (options) {
    switch (options.vehicleType) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
      //defaults to VehicleFactory.prototype.vehicleClass (Car)
    }
    return new this.vehicleClass(options);
  };

  var carFactory = new VehicleFactory();
  var car = carFactory.createVehicle({
    vehicleType: "car",
    color: "yellow",
    doors: 6
  });
  console.log(car instanceof Car);
  console.log(car);

  var movingTruck = carFactory.createVehicle({
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small"
  });
  console.log(movingTruck instanceof Truck);
  console.log(movingTruck);
}
// FactoryPattern();

// Class :: This makes an instance of several derived classes based on interfaced data or events.
var FactoryMethodPattern = function () {
  // another name of just "Factory" pattern ???
}

//
// "Abstract Factory" pattern
//
// Object :: Creates an instance of several families of classes without detailing concrete classes.
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
// "aims to encapsulate a group of individual factories with a common goal"
var AbstractFactoryPattern = function () {
  function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
  }

  function Truck(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  }

  var abstractVehicleFactory = (function () {
    console.log('abstractVehicleFactory');
    var types = {};
    return {
      getVehicle: function (type, customizations) {
        var Vehicle = types[type];
        return (Vehicle ? new Vehicle(customizations) : null);
      },
      registerVehicle: function (type, Vehicle) {
        var proto = Vehicle.prototype;
        // only register classes that fulfill the vehicle contract
        if (proto.drive && proto.breakDown) {
          types[type] = Vehicle;
        }
        return abstractVehicleFactory;
      }
    };
  })();

  abstractVehicleFactory.registerVehicle("car", Car);
  abstractVehicleFactory.registerVehicle("truck", Truck);

  var car = abstractVehicleFactory.getVehicle("car", {
    color: "lime green",
    state: "like new"
  });
  console.log(car);

  var truck = abstractVehicleFactory.getVehicle("truck", {
    wheelSize: "medium",
    color: "neon yellow"
  });
  console.log(truck);
}
// AbstractFactoryPattern();


//
// "BUilder" pattern
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript
// Object :: Separates object construction from its representation, always creates the same type of object.
var BuilderPattern = function () {
  // pattern impl
}

BuilderPattern();

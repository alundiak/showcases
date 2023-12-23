//
// CREATIONAL PATTERNS (initial list taken from designpatternscard.pdf)
//

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

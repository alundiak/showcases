// https://www.patterns.dev/vanilla/factory-pattern
// https://refactoring.guru/design-patterns/factory-method

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

function FactoryPattern() {
  console.log('FactoryPattern ...');

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
  console.log('car', car);
  console.log("car instanceof Car", car instanceof Car);

  var movingTruck = carFactory.createVehicle({
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small"
  });
  console.log("movingTruck", movingTruck);
  console.log("movingTruck instanceof Truck", movingTruck instanceof Truck);
}

FactoryPattern();


// https://refactoring.guru/design-patterns/abstract-factory

//
// "Abstract Factory" pattern
//
// Object :: Creates an instance of several families of classes without detailing concrete classes.
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
// "aims to encapsulate a group of individual factories with a common goal"
function AbstractFactoryPattern() {
  console.log('AbstractFactoryPattern ...');

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

        console.log('\ntypes', types);

        return abstractVehicleFactory;
      }
    };
  })();

  function SuperTruck(options) {
    this.state = options.state || "new";
    this.wheelSize = options.wheelSize || "superLarge";
    this.color = options.color || "black";
  }
  SuperTruck.prototype.drive = true;
  SuperTruck.prototype.breakDown = true;

  abstractVehicleFactory.registerVehicle("car", Car);
  abstractVehicleFactory.registerVehicle("truck", Truck);
  abstractVehicleFactory.registerVehicle("superTruck", SuperTruck);

  var car = abstractVehicleFactory.getVehicle("car", {
    color: "sliver",
    state: "brand new"
  });
  console.log(car); // null

  var truck = abstractVehicleFactory.getVehicle("truck", {
    wheelSize: "large",
    color: "blue"
  });
  console.log(truck); // null

  var superTruck = abstractVehicleFactory.getVehicle("superTruck", {
    state: "customizedNew",
    color: "customizedBlack"
  });
  console.log(superTruck);
  // output:
  // SuperTruck {
  //   state: 'customizedNew',
  //   wheelSize: 'superLarge',
  //   color: 'customizedBlack'
  // }
}
AbstractFactoryPattern();

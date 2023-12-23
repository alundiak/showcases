
//
// "Constructor" pattern - non-GoF
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
// Object constructors are used to create specific types of objects - both preparing the object for use and accepting
// arguments which a constructor can use to set the values of member properties and methods when the object is first created.
//
function ConstructorPattern() {
  console.log('ConstructorPattern ...');

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
  const civic = new Car("Honda Civic", 2009, 20000);
  const mondeo = new Car("Ford Mondeo", 2010, 5000);
  console.log(civic.toString());
  console.log(mondeo.toString());
  //
  //
  //
}

ConstructorPattern();

// https://refactoring.guru/design-patterns/builder

//
// "Builder" pattern
//
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript
// Object :: Separates object construction from its representation, always creates the same type of object.
function BuilderPattern() {
  // Initial code taken from ChatGPT

  // Product: Represents the complex object to be constructed
  class House {
    constructor() {
      this.floor = 0;
      this.walls = 0;
      this.roof = 0;
    }

    setFloor(floor) {
      this.floor = floor;
    }

    setWalls(walls) {
      this.walls = walls;
    }

    setRoof(roof) {
      this.roof = roof;
    }

    showDetails() {
      console.log(`House with ${this.floor} floor(s), ${this.walls} wall(s), and ${this.roof} roof(s)`);
    }
  }

  // Builder: Abstract interface for creating parts of the product
  class HouseBuilder {
    constructor() {
      this.house = new House();
    }

    buildFloor() { }
    buildWalls() { }
    buildRoof() { }
    getHouse() {
      return this.house;
    }
  }

  // ConcreteBuilder: Implements the Builder interface to construct and assemble parts of the product
  class BasicHouseBuilder extends HouseBuilder {
    buildFloor() {
      this.house.setFloor(1);
    }

    buildWalls() {
      this.house.setWalls(4);
    }

    buildRoof() {
      this.house.setRoof(1);
    }
  }

  // Director: Constructs an object using the Builder interface
  class ConstructionEngineer {
    constructor(builder) {
      this.builder = builder;
    }

    construct() {
      this.builder.buildFloor();
      this.builder.buildWalls();
      this.builder.buildRoof();
    }

    getHouse() {
      return this.builder.getHouse();
    }
  }

  // Client code
  const basicHouseBuilder = new BasicHouseBuilder();
  const constructionEngineer = new ConstructionEngineer(basicHouseBuilder);

  constructionEngineer.construct();

  const basicHouse = constructionEngineer.getHouse();
  basicHouse.showDetails();
}

BuilderPattern();

// @ts-ignore
function BuilderPattern() {
  // Product: Represents the complex object to be constructed
  class House {
    private floor: number = 0;
    private walls: number = 0;
    private roof: number = 0;

    setFloor(floor: number): void {
      this.floor = floor;
    }

    setWalls(walls: number): void {
      this.walls = walls;
    }

    setRoof(roof: number): void {
      this.roof = roof;
    }

    showDetails(): void {
      console.log(`House with ${this.floor} floor(s), ${this.walls} wall(s), and ${this.roof} roof(s)`);
    }
  }

  // Builder: Abstract interface for creating parts of the product
  interface HouseBuilder {
    buildFloor(): void;
    buildWalls(): void;
    buildRoof(): void;
    getHouse(): House;
  }

  // ConcreteBuilder: Implements the Builder interface to construct and assemble parts of the product
  class BasicHouseBuilder implements HouseBuilder {
    private house: House = new House();

    buildFloor(): void {
      this.house.setFloor(1);
    }

    buildWalls(): void {
      this.house.setWalls(4);
    }

    buildRoof(): void {
      this.house.setRoof(1);
    }

    getHouse(): House {
      return this.house;
    }
  }

  // Director: Constructs an object using the Builder interface
  class ConstructionEngineer {
    private builder: HouseBuilder | null = null;

    setBuilder(builder: HouseBuilder): void {
      this.builder = builder;
    }

    construct(): void {
      if (!this.builder) {
        throw new Error("Builder not set");
      }

      this.builder.buildFloor();
      this.builder.buildWalls();
      this.builder.buildRoof();
    }
  }

  // Client code
  const basicHouseBuilder: HouseBuilder = new BasicHouseBuilder();
  const constructionEngineer: ConstructionEngineer = new ConstructionEngineer();

  constructionEngineer.setBuilder(basicHouseBuilder);
  constructionEngineer.construct();

  const basicHouse: House = basicHouseBuilder.getHouse();
  basicHouse.showDetails();

  // This separation of concerns aligns more closely with the Single Responsibility Principle (SOLID). 
  // The client code can access the constructed House directly from the builder without involving the ConstructionEngineer.
}

BuilderPattern();

// The Builder Pattern itself aims to separate the construction of a complex object from its representation, promoting flexibility and ease of use. 
// The Director (in this case, ConstructionEngineer) orchestrates the construction process using a builder 
// but should not necessarily be responsible for holding the resulting product (House).

class Car {
  private model: string;
  private year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  getDetails(): string {
    return `${this.year} ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2022);
console.log(myCar.getDetails()); // Output: 2022 Toyota

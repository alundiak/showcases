// Without OCP
class Rectangle {
  constructor(public width: number, public height: number) { }
}

class AreaCalculator {
  calculateRectangleArea(rectangle: Rectangle) {
    return rectangle.width * rectangle.height;
  }
}

// With OCP
abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

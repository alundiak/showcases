//
// Open/Closed Principle (OCP) - Software entities (classes, modules, functions, etc.) should be OPEN for EXTENSION but CLOSED for MODIFICATION.
//

// Without OCP
class Rectangle {
  constructor(public width: number, public height: number) {
    console.log('Rectangle class instance created');
  }
}

class Circle {
  constructor(public radius: number) {
    console.log('Circle class instance created');
  }
}

class AreaCalculator {
  // If we calculate Rectangle area, this code is hardcoded, so it forces us to modify this method to be able to calculate Circle area.
  // But then we will introduce conditional code execution + 1 level complexity
  calculateRectangleArea(rectangle: Rectangle) {
    console.log('AreaCalculator.calculateRectangleArea() public method is executed');
    return rectangle.width * rectangle.height;
  }

  // ChatGPT says this way it's IMPROVED extendibility so it's good for COP, but in lung term conditional code can be complicated
  calculateAreaConditionally<T>(shapeObject: T) {
    if (shapeObject instanceof Rectangle) {
      return shapeObject.width * shapeObject.height;
    } else if (shapeObject instanceof Circle) {
      return Math.PI * shapeObject.radius * shapeObject.radius;
    }
  }
}

function testOCP_1() {
  const rectangleInstance = new Rectangle(100, 500);
  const areaCalculator = new AreaCalculator();
  const calculatedArea = areaCalculator.calculateRectangleArea(rectangleInstance);
  console.log(`Calculated area is: ${calculatedArea}`);

  console.log(`\n`);

  const circleInstance = new Circle(100);
  const newRectangleArea = areaCalculator.calculateAreaConditionally(rectangleInstance);
  const newCircleArea = areaCalculator.calculateAreaConditionally(circleInstance);

  console.log(`New calculated Rectangle area is: ${newRectangleArea}`);
  console.log(`New calculated Circle area is: ${newCircleArea}`);
}
// testOCP_1();

//
// With OCP - v1 - using Abstract Class + extends
//
abstract class ShapeOCP {
  abstract calculateArea(): number;
}

class RectangleOCP extends ShapeOCP { // v1
  constructor(public width: number, public height: number) {
    super();
    console.log('RectangleOCP class instance created');
  }

  calculateArea() {
    console.log('RectangleOCP.calculateArea() public method is executed');
    return this.width * this.height;
  }
}

class CircleOCP extends ShapeOCP { // v1
  constructor(public radius: number) {
    super();
    console.log('CircleOCP class instance created');
  }

  calculateArea() {
    console.log('CircleOCP.calculateArea() public method is executed');
    return Math.PI * this.radius * this.radius;
  }
}

function test_OCP_v1() {
  const r1 = new RectangleOCP(100, 500);
  const calculatedArea1 = r1.calculateArea();
  console.log(`Calculated RectangleOCP area is: ${calculatedArea1}`);

  const r2 = new CircleOCP(500);
  const calculatedArea2 = r2.calculateArea();
  console.log(`Calculated CircleOCP area is: ${calculatedArea2}`);
}
// test_OCP_v1();

//
// With OCP - v2 - using Interface + implements
//
interface IShapeOCPv2 { // v2
  calculateArea(): number;
}

class RectangleOCPv2 implements IShapeOCPv2 {
  constructor(public width: number, public height: number) { }

  calculateArea() {
    return this.width * this.height;
  }
}

class CircleOCPv2 implements IShapeOCPv2 {
  constructor(public radius: number) { }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
class TriangleOCPv2 implements IShapeOCPv2 {
  constructor(private base: number, private height: number) { }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
function test_OCP_v2() {
  const r1 = new RectangleOCPv2(100, 500);
  const calculatedArea1 = r1.calculateArea();
  console.log(`Calculated RectangleOCPv2 area is: ${calculatedArea1}`);

  const r2 = new CircleOCPv2(500);
  const calculatedArea2 = r2.calculateArea();
  console.log(`Calculated CircleOCPv2 area is: ${calculatedArea2}`);

  const r3 = new TriangleOCPv2(4, 6);
  console.log(`Calculated TriangleOCPv2 area is: ${r3.calculateArea()}`);
}
test_OCP_v2();

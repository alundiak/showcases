// calculator.ts
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

// calculator.test.ts
// @ts-ignore
describe('Calculator', () => {
  // @ts-ignore
  it('should add two numbers correctly', () => {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);
    // @ts-ignore
    expect(result).toBe(5);
  });
});

// In this TDD example, we wrote the test (calculator.test.ts) before implementing the Calculator class (calculator.ts).

// person.ts
class Person {
  constructor(private firstName: string, private lastName: string) { }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
export default Person;

// person.spec.ts
// import Person from './person';
// @ts-ignore
describe('Person', () => {
  // @ts-ignore
  it('should return the full name correctly', () => {
    const person = new Person('John', 'Doe');
    const fullName = person.getFullName();
    // @ts-ignore
    expect(fullName).toBe('John Doe');
  });
});

// In this BDD example, we described the behavior of the Person class before implementing it.
// The test (person.spec.ts) focuses on the expected behavior rather than just the functionality.

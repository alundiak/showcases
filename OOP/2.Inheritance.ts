// @ts-nocheck
// @ts-ignore
class Animal {
  constructor(private name: string) { }

  makeSound(): string {
    return "Some generic sound";
  }
}

// @ts-ignore
class Dog extends Animal {
  makeSound(): string {
    return "Woof! Woof!";
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.makeSound()); // Output: Woof! Woof!


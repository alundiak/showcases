// @ts-nocheck

class SoundFormatter {
  static formatWithPrefix(name?: string): string {
    return name ? `${name}: ` : '';
  }
}

// @ts-ignore
class Animal {
  constructor(protected name?: string) { }

  makeSound(): string {
    return `${SoundFormatter.formatWithPrefix(this.name)}Some generic sound`;
  }
}

// @ts-ignore
class Dog extends Animal {
  makeSound(): string {
    return `${SoundFormatter.formatWithPrefix(this.name)}Woof! Woof!`;
  }
}

// @ts-ignore
class Cat extends Animal {
  makeSound(): string {
    return `${SoundFormatter.formatWithPrefix(this.name)}Meow! Meow!`;
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.makeSound());

const myCat = new Cat("Barsik");
console.log(myCat.makeSound());

export {
  Animal,
  Dog,
  Cat
}

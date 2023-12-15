// Without LSP
class Bird {
  fly() {
    // Fly logic
  }
}

class Ostrich extends Bird {
  // Ostrich can't fly, violates LSP
}

// With LSP
abstract class Bird {
  abstract move(): void;
}

class FlyingBird extends Bird {
  fly() {
    // Fly logic
  }

  move() {
    this.fly();
  }
}

class NonFlyingBird extends Bird {
  move() {
    // No fly method for birds that can't fly
  }
}

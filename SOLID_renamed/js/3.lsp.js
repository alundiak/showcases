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
class Bird {
  move() {
    // Common move logic
  }
}

class FlyingBird extends Bird {
  fly() {
    // Fly logic
  }
}

class NonFlyingBird extends Bird {
  // No fly method for birds that can't fly
}

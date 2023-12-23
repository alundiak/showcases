// Without ISP
class Worker {
  work() {
    // Work logic
  }

  eat() {
    // Eat logic
  }
}

// With ISP
class Workable {
  work();
}

class Eatable {
  eat();
}

class Worker implements Workable, Eatable {
  work() {
    // Work logic
  }

  eat() {
    // Eat logic
  }
}

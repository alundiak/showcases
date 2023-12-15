// Without ISP
interface Worker {
  work(): void;
  eat(): void;
}

// With ISP
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Worker implements Workable, Eatable {
  work() {
    // Work logic
  }

  eat() {
    // Eat logic
  }
}

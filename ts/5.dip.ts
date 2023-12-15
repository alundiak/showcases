// Without DIP
class LightBulb {
  turnOn() {
    // Turn on the light bulb
  }
}

class Switch {
  constructor(private bulb: LightBulb) { }

  operate() {
    this.bulb.turnOn();
  }
}

// With DIP
interface Switchable {
  turnOn(): void;
}

class LightBulb implements Switchable {
  turnOn() {
    // Turn on the light bulb
  }
}

class Switch {
  constructor(private device: Switchable) { }

  operate() {
    this.device.turnOn();
  }
}

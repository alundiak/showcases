// Without DIP
class LightBulb {
  turnOn() {
    // Turn on the light bulb
  }
}

class Switch {
  constructor(bulb) {
    this.bulb = bulb;
  }

  operate() {
    this.bulb.turnOn();
  }
}

// With DIP
class Switchable {
  turnOn();
}

class LightBulb implements Switchable {
  turnOn() {
    // Turn on the light bulb
  }
}

class Switch {
  constructor(device) {
    this.device = device;
  }

  operate() {
    this.device.turnOn();
  }
}

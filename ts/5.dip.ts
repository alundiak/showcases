//
// Dependency Inversion Principle (DIP) - high-level modules should NOT depend on low-level modules but rather BOTH should depend on ABSTRACTIONS
//
// Without DIP
class LightBulb {
  turnOn() {
    console.log('LightBulb class turnOn() impl - turn on the light bulb');
  }
}

class Switch {
  constructor(private bulb: LightBulb) {
    console.log('Switch class constructor() => bulb:', bulb);
  }

  operate() {
    console.log('Switch class operate() impl');
    this.bulb.turnOn();
  }
}

function testDIP_1() {
  const b = new LightBulb();
  const s = new Switch(b);
  s.operate();
}
// testDIP_1();

//
// With DIP - v1
//

// Abstraction (interface) representing a Switchable object/class
interface SwitchableDIP {
  turnOn(): void;
}

// low-level
class LightBulbDIP implements SwitchableDIP {
  turnOn() {
    console.log('LightBulbDIP turnOn() impl (from SwitchableDIP interface)');
  }
}

// high-level
class SwitchDIP {
  constructor(private device: SwitchableDIP) {
    console.log('SwitchDIP class constructor(), device:', device);
  }

  operate() {
    console.log('SwitchDIP class operate() impl');
    this.device.turnOn();
  }
}

function testDIP_2() {
  const b = new LightBulbDIP(); // low-level
  const s = new SwitchDIP(b); // high-level
  s.operate();
}
// testDIP_2()


//
// With DIP - v2
//

// Abstraction (interface) representing a Logger
interface Logger {
  log(message: string): void;
}

// High-level module that depends on the Logger abstraction
class App {
  private logger: Logger;

  constructor(logger: Logger) {
    console.log('App.constructor()');
    this.logger = logger;
  }

  doSomething(msgPlus: string): void {
    // Using the Logger abstraction
    this.logger.log('Something happened: ' + msgPlus);
  }
}

// Low-level module implementing the Logger abstraction
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[Console Logger] ${message}`);
  }
}

// Another low-level module implementing the Logger abstraction
class FileLogger implements Logger {
  log(message: string): void {
    // Implementation for logging to a file
    console.log(`[File Logger] ${message}`);
  }
}

function testDIP_3() {
  const appWithConsoleLogger = new App(new ConsoleLogger());
  appWithConsoleLogger.doSomething('testDIP_3() #1');

  const appWithFileLogger = new App(new FileLogger());
  appWithFileLogger.doSomething('testDIP_3() #2');
}
// testDIP_3();


//
// With DIP - v3 - MY MODIFICATION
//

interface Logable {
  log(message: string): void;
}

interface Versionable {
  // Providing "?" to implement optional need of contracted method from Interface is ONLY a way to avoid TypeScript fail.
  // But it's only MAY kinda violate ISP SOLID rule.
  // Anyhow, this combination with Logable.log() and Versionable?.version() is KINDA ok composition for ISP + DIP rules to follow
  version?(): string;
}

// High-level module that depends on the Logger abstraction
class BrandApp {
  private myLogger: Logable;

  constructor(logger: Logable) {
    console.log('BrandApp.constructor()');
    this.myLogger = logger;
  }

  doSomething(msgPlus: string): void {
    this.myLogger.log('BrandApp.doSomething() => Something happened: ' + msgPlus);
  }
}

// Low-level module implementing the Logable abstraction
class BrandConsoleLogger implements Logable {
  log(message: string): void {
    console.log(`[BrandConsoleLogger] ${message}`);
  }
}

// Another low-level module implementing the Logable abstraction and Versionable abstraction
class BrandFileLogger implements Logable, Versionable {
  log(message: string): void {
    console.log(`[BrandFileLogger] ${message}. Version: ${this.version()}`);
  }
  version(): string {
    return '1.2.3'
  }
}

function testDIP_my_version() {
  const appWithConsoleLogger = new BrandApp(new BrandConsoleLogger());
  appWithConsoleLogger.doSomething('testDIP_my_version() #1');

  const appWithFileLogger = new BrandApp(new BrandFileLogger());
  appWithFileLogger.doSomething('testDIP_my_version() #2');
}
// testDIP_my_version();

//
// Me: What should I add to my code to make sure the code ALSO follows OCP and LSP rules from SOLID?
//


// A - in regards to "Open/Closed Principle (OCP)":

interface LoggerFactory {
  createLogger(): Logable;
}

class ConsoleLoggerFactory implements LoggerFactory {
  createLogger(): Logable {
    return new BrandConsoleLogger();
  }
}

class FileLoggerFactory implements LoggerFactory {
  createLogger(): Logable {
    return new BrandFileLogger();
  }
}

class BrandAppExtended {
  private myLogger: Logable;

  constructor(loggerFactory: LoggerFactory) {
    console.log('BrandAppExtended.constructor()');
    this.myLogger = loggerFactory.createLogger();
  }

  doSomething(msgPlus: string): void {
    this.myLogger.log('BrandAppExtended.doSomething() Something happened: ' + msgPlus);
  }
}

// B - in regards to "Liskov Substitution Principle (LSP)":
// Ensure that any subtype of Logable can be used in place of the base type without breaking the program
class CustomLogger implements Logable {
  log(message: string): void {
    console.log(`[CustomLogger] ${message}`);
  }
}
class CustomLoggerFactory implements LoggerFactory {
  createLogger(): Logable {
    return new CustomLogger();
  }
}

function testDIP_my_ExtendedVersion() {
  const factory1 = new ConsoleLoggerFactory();
  const appWithConsoleLogger = new BrandAppExtended(factory1);
  appWithConsoleLogger.doSomething('testDIP_my_ExtendedVersion() #1');

  const factory2 = new FileLoggerFactory();
  const appWithFileLogger = new BrandAppExtended(factory2);
  appWithFileLogger.doSomething('testDIP_my_ExtendedVersion() #2');
}
testDIP_my_ExtendedVersion();

// function testAndrii() {

// }

// https://bobbyhadz.com/blog/typescript-duplicate-function-implementation
// export { }; // 👈️ make file ES Module

SOLID principles showcase
===

SOLID principles are a set of guidelines for designing maintainable and scalable software, while design patterns are specific solutions to recurring design problems. 
Following SOLID principles can lead to the creation of well-architected software, and design patterns are tools that can be applied within that architecture to address specific challenges.

![img](./SOLID1.png)

# SOLID info

**Single Responsibility Principle (SRP)**:

- Class should have only one reason to change, meaning that it should have only one responsibility or job.

Examples: 
- Good adherence to the SRP is the Spring Framework in the Java ecosystem (Spring MVC, Spring Data, Spring Boot)

**Open/Closed Principle (OCP)**:

- Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

Examples: 
- Good adherence: Hibernate. 
- jQuery's plugin architecture allows developers to extend its functionality by creating plugins. This follows the OCP by allowing extension without modifying jQuery's source code.
- Eclipse is built with a modular architecture, allowing developers to extend its functionality through plugins without modifying the core code.
- Django's class-based views and middleware architecture follow OCP. Developers can create custom middleware or views to extend behavior without modifying Django's core components.

**Liskov Substitution Principle (LSP)**

- Objects of a base class should be replaceable with objects of a derived class without affecting the correctness of the program. 
- This is achieved by ensuring that derived classes honor the contracts established by the base class.

Examples:

- Many JavaScript and TypeScript libraries adhere to LSP. For instance, various libraries for handling asynchronous operations (like Promises or Observables) allow you to interchangeably use different implementations without affecting the overall logic of your code.
- Dependency Injection (DI) frameworks like Spring (Java), Dagger (Java/Kotlin), and Angular (TypeScript) follow LSP. 
- In Java, the Collections Framework is a good example of LSP. Various collection types (e.g., List, Set, Map) implement common interfaces (e.g., Collection, List, Set, Map). 
This allows you to substitute different implementations without affecting the correctness of the code.
- In .NET, the LINQ (Language Integrated Query) extensions and the concept of IEnumerable demonstrate LSP.
- LSP is pervasive in object-oriented languages like Java, C#, and Python. Polymorphism, achieved through interfaces and inheritance, allows you to use objects of derived classes wherever base class objects are expected.

**Interface Segregation Principle (ISP)**

- class should not be forced to implement interfaces it does not use.
- it is better to have multiple, small, and specific interfaces rather than a single large, general-purpose interface.
- The main objective of ISP is to avoid imposing unnecessary dependencies on classes and to provide flexibility for clients to depend only on the interfaces they need. 
By breaking down interfaces into smaller units, you make it easier to create more specific and focused contracts.

Examples:

- Angular follows SOLID principles, including ISP. In Angular, services often expose interfaces defining the specific functionality they provide. Components then depend on these interfaces rather than concrete implementations, allowing for easier substitution and adhering to ISP.
- React's component-based architecture encourages the creation of focused, small components that adhere to the Single Responsibility Principle (SRP) and Interface Segregation Principle. Components communicate through well-defined interfaces, such as props and state.
- Express, a popular web framework for Node.js, follows good design principles, including ISP. Middleware functions in Express often expose well-defined interfaces, and you can compose them to build more complex functionality.
- Java Spring Framework
- JUnit (Java)
- .NET Core

**Dependency Inversion Principle (DIP)**
- high-level modules should not depend on low-level modules but rather both should depend on abstractions
- abstractions should not depend on details; details should depend on abstractions

Examples:
- NestJS is a TypeScript-based framework for building scalable and maintainable server-side applications, leverages dependency injection to achieve the inversion of dependencies and encourages modular design.
- Angular's dependency injection system allows developers to declare dependencies in the constructor and have them injected at runtime.
- Angular's modules and services promote a modular design, making it easier to adhere to DIP.
- (PHP) Symfony's dependency injection container allows developers to define services and inject them where needed.
- Java. Inversion of Control (IoC) containers in Spring manage the creation and injection of dependencies, facilitating adherence to DIP.
- ASP.NET Core includes a built-in dependency injection container that supports constructor injection.
- Google Guice is a lightweight dependency injection framework for Java that encourages constructor injection.

# Not SOLID info

- The Common Closure Principle (CCP) and Common Reuse Principle (CRP) are not part of the SOLID principles.
- CCP and CRP, on the other hand, are principles that emphasize the grouping of classes based on the commonality of reasons for change (CCP) and the idea that classes should not be forced to depend on interfaces they do not use (CRP). 

# SOLID via js

MAYBE

# SOLID via ts 

Look `*.ts` files code for more explanation of every SOLID rule.

## `tsc`

- `tsc --init` Creates a tsconfig.json with the recommended settings in the working directory.
- `tsc --init --target esnext --module esnext --lib esnext` 

- `tsc` builds all *.ts files into `dist` (because it's `outputDir` in `tsconfig.json`).
- `tsc -d` compiles with `*.d.ts` file.
- `tsc 1.srp.ts` compiles to `1.srp.js` but in "ugly" way.
- `tsc 1.srp.ts -d` compiles with `*.d.ts` file.

## `ts-node`

- `ts-node 1.srp.ts` execute TypeScript file/code in NodeJS ecosystem


## How JavaScript libraries/frameworks follow SOLID?

Note. Info composed based on ChatGPT prompts:

| Framework/Lib     | SRP | OCP | LSP | ISP | DIP |
|-------------------|-----|-----|-----|-----|-----|
| React (JavaScript)| +   | +   | +   | -   | +   |
| Angular (TypeScript)| +  | +   | +   | -   | +   |
| Vue.js (JavaScript)| +  | +   | +   | -   | +   |
| Express (Node.js) | +   | +   | +   | -   | +   |
| NestJS (TypeScript)| +  | +   | +   | -   | +   |


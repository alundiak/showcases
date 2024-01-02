Design Patterns showcase
===

## Resources

Essentials:

- https://en.wikipedia.org/wiki/Design_Patterns
- https://www.gofpattern.com/index.php
- https://www.javier8a.com/itc/bd1/articulo.pdf
- https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns

Other:

- https://www.patterns.dev/ contains vanilla JavaScript patterns, React patterns and VueJS patterns.
- https://addyosmani.com/learning-jsdp/ => https://github.com/addyosmani/learning-jsdp
- https://github.com/addyosmani/essential-js-design-patterns - older version
- https://refactoring.guru/design-patterns (like clone of sourcemaking.com)
- https://sourcemaking.com/design_patterns (like clone of refactoring.guru)
- https://www.linkedin.com/posts/brijpandeyji_design-patterns-are-time-tested-templates-activity-7141388959699410945-V9vN

## Key notes about Design patterns

### Creational patterns

**Singleton**:

- The Singleton pattern solves two problems at the same time, violating the (SOLID) Single Responsibility Principle.
- The `Object.freeze()` method makes sure that consuming code cannot modify the Singleton. 
- are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.
- Simple real case scenario example is [here](https://codesandbox.io/p/sandbox/singleton-1-64mr1) with two buttons using same Counter object.
- A Facade class can often be transformed into a Singleton since a single facade object is sufficient in most cases.
- Flyweight would resemble Singleton if you somehow managed to reduce all shared states of the objects to just one flyweight object.

**Prototype**:

- The Prototype pattern is very powerful when working with objects that should have access to the same properties. Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.
- Prototype pattern lets you copy existing objects without making your code dependent on their classes.
- The value of `__proto__` on any instance of the constructor, is a direct reference to the constructor’s `prototype`!
- The `Object.create()` method lets us create a new object, to which we can explicitly pass the value of its prototype

**Factory?** or **Factory Method**:

- A function is a "factory function" when it returns a new object without the use of the `new` keyword!
- A factory function is a function that returns another function or object. It is often used to create closures, which are functions that have access to variables from their lexical scope even after the scope has finished executing. 
- In JavaScript, the factory pattern isn’t much more than a function that returns an object without using the new keyword. ES6 arrow functions allow us to create small factory functions that implicitly return an object each time.
- Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
- Factory Method can be used for creating cross-platform UI elements without coupling the client code to concrete UI classes.
- Factory Method can be used when you want to provide users of your library or framework with a way to extend its internal components.
- Many designs start by using Factory Method (less complicated and more customizable via subclasses) and evolve toward Abstract Factory, Prototype, or Builder (more flexible, but more complicated).
- Abstract Factory classes are often based on a set of Factory Methods, but you can also use Prototype to compose the methods on these classes.
- You can use Factory Method along with Iterator to let collection subclasses return different types of iterators that are compatible with the collections.

**Abstract Factory**:

- Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
- Builder focuses on constructing complex objects step by step. Abstract Factory specializes in creating families of related objects. Abstract Factory returns the product immediately, whereas Builder lets you run some additional construction steps before fetching the product.
- Abstract Factory can serve as an alternative to Facade when you only want to hide the way the subsystem objects are created from the client code.
- Abstract Factories, Builders and Prototypes can all be implemented as Singletons.

**Builder**:

- Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
- You can combine Builder with Bridge: the director class plays the role of the abstraction, while different builders act as implementations.

**Object Pool** (new term for me in 2023)

- The Object Pool Pattern involves creating and maintaining a pool of reusable objects to avoid the overhead of object creation and destruction. 

### Structural patterns


**Module**:

- The Module pattern allows you to split up your code into smaller, reusable pieces.
- ES2015 introduced built-in JavaScript modules. 



### Behavioral patterns

TBD

## Visualization

From https://refactoring.guru/design-patterns/catalog

![img](./design_patterns_catalog_from_refactoring_guru.png)

From LinkedIn:

![img](./design_patterns_visualized_from_LinkedIn.gif)


Maybe implement UI using Bootstrap Album layout

https://getbootstrap.com/docs/5.0/examples/album/#

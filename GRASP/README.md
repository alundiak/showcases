GRASP
===

> GRASP, which stands for General Responsibility Assignment Software Patterns, is a set of principles that help guide the assignment of responsibilities to classes and objects in object-oriented design. These principles were introduced by Craig Larman in his book "Applying UML and Patterns."

GRASP principles:

- Information Expert:

> Assign a responsibility to the class that has the required information to fulfill it.
This principle suggests that a class should be assigned a responsibility if it has the necessary information to carry out that responsibility effectively.

- Creator:

> Assign the responsibility to the class that creates an instance of another class.
This principle helps in deciding which class should be responsible for creating instances of another class.

- Controller:

> Assign the responsibility to a class representing a system or subsystem, or to a controller class, which coordinates and controls system events.
The controller is responsible for handling system events and orchestrating the flow of control.

- Low Coupling:

> Assign responsibilities to avoid high coupling between classes.
Minimize the dependencies between classes by assigning responsibilities so that they have low coupling.

- High Cohesion:

> Assign responsibilities to a class so that its members are highly cohesive.
Cohesion refers to how closely the members (attributes and methods) of a class are related to each other. High cohesion indicates that a class has a well-focused set of responsibilities.

- Polymorphism:

> Assign a responsibility to a class if it uses its polymorphic behavior.
This principle is related to leveraging polymorphism to achieve flexibility and extensibility in the system.

- Pure Fabrication:

> Assign a highly cohesive set of responsibilities to a class that does not represent a concept in the problem domain.
Introduce a class that does not represent a real-world concept when necessary to achieve certain design objectives, such as achieving low coupling.

- Indirection:

> Assign a responsibility to an intermediary object to mediate between other components or services to reduce the coupling between them.
This principle is useful for reducing direct dependencies between classes.


## Notable libraries, frameworks, services or platforms that were recognized in the industry who follow GRASP principles

- **Spring Framework (Java)** follows many OOP principles and design patterns. The use of dependency injection and inversion of control aligns with GRASP's Controller pattern.
- **ASP.NET MVC (C#)** follows the Model-View-Controller pattern, which aligns with GRASP's Controller pattern. Controllers in ASP.NET MVC typically handle user input, coordinating with models and views.

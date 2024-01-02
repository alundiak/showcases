TDD and BDD
===

TDD (Test-Driven Development) involves writing tests before writing the actual code. This helps ensure that the codebase remains testable, reliable, and maintainable, driving the implementation to fulfill the specified requirements.

Behavior-Driven Development (BDD) is a methodology that emphasizes collaboration between technical and non-technical stakeholders, focusing on describing the behavior of the system in a natural language format before implementation.

- `describe()`: Organizes tests into a logical group, providing a higher-level structure for test suites.
- `it()`: Defines an individual test case or specification within a test suite.
- `expect()`: Asserts conditions in tests, specifying the expected outcomes.
- `should()`: A BDD-style assertion method used for expressing expected behavior in tests.
- `assert()`: Validates conditions in tests, typically used in TDD. Built-in NodeJS method.

Frameworks: 

- Jasmine, Mocha, CHai, Jest, supertest
- supertest is a library rather than a full-fledged testing framework. It is specifically designed for making HTTP assertions and testing APIs. supertest is often used in conjunction with testing frameworks like Mocha or Jest to facilitate the testing of HTTP endpoints in web applications.

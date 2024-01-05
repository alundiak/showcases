Showcases
===

Showcases for different Software Development topics which well known by acronyms to understand how theory becomes practice.

My special angle is **JavaScript** which is functional programming language and as result many SOLID principles and Design patterns are not so relevant in JavaScript world. 

But since **TypeScript** appeared as superset after JavaScript, implementing more and more ECMAScript paradigms/features it becomes more Object Orienting approach. And now, some principles and patterns may apply and code can follow and be compliant.  


# Topics

There are many concepts, paradigms, principles related to software design, design and architectural patterns, rules and solutions. 

## kinda hard skills related

- [OOP paradigms](./OOP/README.md)
- [SOLID principles](./SOLID/README.md)
- [GRASP principles](./GRASP/README.md)
- [Design Patterns](./design-patterns/README.md)
- maybe AntiPatterns? => https://sourcemaking.com/antipatterns
- Architectural Patterns?
  - showcases: Microservices, Monolithic, Serverless, and Event-Driven Architecture.
  - https://www.linkedin.com/feed/update/urn:li:activity:7143571730769276929/
- [DDD](./DDD/README.md)
- [TDD and BDD](./TDD_BDD/README.md)

## Security related
- [SOAR solutions](./SOAR/README.md)
- [SIEM concepts](./SIEM/README.md)

## BTW, just a reminder

- **DRY** (Don't Repeat Yourself) encourages the avoidance of duplicating code. Instead, reuse code through abstraction or encapsulation to reduce redundancy.

- **KISS** (Keep It Simple, Stupid) promotes simplicity in design and implementation. Solutions should be as simple as possible to achieve the required functionality.

- **YAGNI** (You Aren't Gonna Need It) advises against adding functionality until it is necessary. Avoid over-engineering by implementing only what is currently needed, rather than trying to anticipate future requirements.

## kinda soft skills related

- [GRIT](./GRIT/README.md)

## Maybe?

- OWASP stands for the Open Web Application Security Project. It is a non-profit organization that focuses on improving the security of software. OWASP provides resources, tools, and documentation to help organizations and individuals understand and address security issues in web applications and software development.

## Note.

Initial code for many files is generated by [ChatGPT](https://chat.openai.com/), but then I modified and extended to show real case scenarios.

## TODO 

- Visualized maybe?
- Find out some other topics.


## Side notes / outcomes

(my initial intention of this repo was to show that "SOLID" is NOT solid in reality)

- CLOSURE example: OUTER function returns INNER function which mutate variable from OUTER function scope exhibits side effects by modifying and relying on external state, which makes it impure. And that is AGAINST at least Functional Programming Pure Function rule to obey.
- ExpressJS middleware example for GET route with filtering. According to API we can introduce conditional code to verify if GET requests query `type` is present, then return FILTERED records by type. But if no `type` return all records. It breaks SRP SOLID rule, but remain kinda compliant with REST rule, because getting similar entities is expected to be consistent.
- While the useContext hook in React is often used in scenarios that resemble a Singleton pattern, it's important to note that the pattern itself is not explicitly enforced by useContext. The useContext hook provides a way to consume values from a React context, and the behavior may resemble the principles of a Singleton, but it's not exactly the same.
- TBD
- TBD

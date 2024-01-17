SOA
===

https://en.wikipedia.org/wiki/Service-oriented_architecture

> A service has four properties according to one of many definitions of SOA:

- It logically represents a repeatable business activity with a specified outcome.
- It is self-contained.
- It is a black box for its consumers, meaning the consumer does not have to be aware of the service's inner workings.
- It may be composed of other services.


> SOA is related to the idea of an API (application programming interface), an interface or communication protocol between different parts of a computer program intended to simplify the implementation and maintenance of software. An API can be thought of as the service, and the SOA the architecture that allows the service to operate.


https://aws.amazon.com/what-is/service-oriented-architecture/

> Service-oriented architecture (SOA) is a method of software development that uses software components called services to create business applications. Each service provides a business capability, and services can also communicate with each other across platforms and languages. Developers use SOA to reuse services in different systems or combine several independent services to perform complex tasks.

> In service-oriented architecture (SOA), services function independently and provide functionality or data exchanges to their consumers. The consumer requests information and sends input data to the service. The service processes the data, performs the task, and sends back a response. For example, if an application uses an authorization service, it gives the service the username and password. The service verifies the username and password and returns an appropriate response.

> Services communicate using established rules that determine data transmission over a network. These rules are called communication protocols. Some standard protocols to implement SOA include the following:

• Simple Object Access Protocol (SOAP)
• RESTful HTTP
• Apache Thrift
• Apache ActiveMQ
• Java Message Service (JMS)

## Microservices

> Microservices architecture is made up of very small and completely independent software components, called microservices, that specialize and focus on one task only. Microservices communicate through APIs, which are rules that developers create to let other software systems communicate with their microservice.


> Microservices architecture is an evolution of the SOA architectural style. Microservices address the shortcomings of SOA to make the software more compatible with modern cloud-based enterprise environments. They are fine grained and favor data duplication as opposed to data sharing. This makes them completely independent with their own communication protocols that are exposed through lightweight APIs. It’s essentially the consumers' job to use the microservice through its API, thus removing the need for a centralized ESB.


> AWS is a great place to build modern applications with modular architectural patterns, serverless operational models, and agile development processes. It offers the most complete platform for building highly available microservices to power modern applications of any scope and scale. For example, you can do the following:

• Build, isolate, and run secure microservices in managed containers to simplify operations and reduce management overhead.
• Use AWS Lambda to run your microservices without provisioning and managing servers.
• Choose from 15 relational and non-relational purpose-built AWS databases to support microservices architecture.
• Easily monitor and control microservices running on AWS with AWS App Mesh.
• Monitor and troubleshoot complex microservice interactions with AWS X-Ray.

My dedicated repo is here: https://github.com/alundiak/micro-services-experiments

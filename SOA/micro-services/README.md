two micro-services example
===

## How to trigger micro-services activities

- `curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello from ServiceA"}' http://localhost:3001/data`
- `curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello from ServiceB"}' http://localhost:3002/data`

curl -X POST -H "Content-Type: application/json" -d '{"service": "ServiceA", "message": "Hello from ServiceA"}' http://localhost:3001/data
curl -X POST -H "Content-Type: application/json" -d '{"service": "ServiceB", "message": "Hello from ServiceB"}' http://localhost:3002/data


## Info

- https://blog.logrocket.com/building-microservices-node-js/
- https://radixweb.com/blog/building-microservices-with-node-js#Reasons

- https://fauna.com/blog/how-to-build-microservices-with-node-js

Node.js has become a popular language for enterprises and startups who want to embrace microservices. There are several reasons why:

- Improved execution time - The V8 JavaScript engine that powers Node.js compiles functions written in JavaScript to native machine code. This makes Node.js a popular choice for building microservices that carry out low-latency CPU and IO-intensive operations.
- Event-driven architecture - Most of the objects in Node.js provide a way to emit and listen to events making it highly beneficial in building event-driven apps.
- Asynchronous and non-batch - Most Node.js libraries support non-blocking calls which continue execution without waiting for the previous call to return. Additionally, data is returned as-is, streamed as chunks, and not batched in a buffer.
- Scalable technology - The Node.js execution model supports scaling by delegating request handling to other worker threads.

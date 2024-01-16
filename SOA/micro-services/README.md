two micro-services example
===

## Info

- https://blog.logrocket.com/building-microservices-node-js/
- https://radixweb.com/blog/building-microservices-with-node-js#Reasons

- https://fauna.com/blog/how-to-build-microservices-with-node-js

Node.js has become a popular language for enterprises and startups who want to embrace microservices. There are several reasons why:

- Improved execution time - The V8 JavaScript engine that powers Node.js compiles functions written in JavaScript to native machine code. This makes Node.js a popular choice for building microservices that carry out low-latency CPU and IO-intensive operations.
- Event-driven architecture - Most of the objects in Node.js provide a way to emit and listen to events making it highly beneficial in building event-driven apps.
- Asynchronous and non-batch - Most Node.js libraries support non-blocking calls which continue execution without waiting for the previous call to return. Additionally, data is returned as-is, streamed as chunks, and not batched in a buffer.
- Scalable technology - The Node.js execution model supports scaling by delegating request handling to other worker threads.


## How to trigger micro-services activities

- `curl -X POST -H "Content-Type: application/json" -d '{"service": "ServiceA", "message": "Hello from ServiceA"}' http://localhost:3001/data`
- `curl -X POST -H "Content-Type: application/json" -d '{"service": "ServiceB", "message": "Hello from ServiceB"}' http://localhost:3002/data`

## Run locally

CLI/Terminal 1: `npm run A` => http://localhost:3001/
CLI/Terminal 2: `npm run B` => http://localhost:3002/
CLI/Terminal 3: `npm run server` => http://localhost:3000/


## Build Docker images and run containers

### Build images:

- `docker build -t servicea:latest . --file ServiceA.Dockerfile`
- `docker build -t serviceb:latest . --file ServiceB.Dockerfile`
- `docker build -t serverapp:latest . --file Server.Dockerfile`

### Run containers 

**Without network, basic way, well enough**:

- `docker run -p 3001:3001 -d servicea:latest`
- `docker run -p 3002:3002 -d serviceb:latest`
- `docker run -p 3000:3000 -d serverapp:latest`

Available URLs: http://localhost:3000/ which refers to API services: http://localhost:3001/getAData and http://localhost:3002/getBData

**If hostname IP-addresses needed (although doesn't work on MacOS)**:

- `docker network create my-microservices-network`
- `docker run -p 3001:3001 --network=my-microservices-network --name=serviceA -d servicea:latest`
- `docker run -p 3002:3002 --network=my-microservices-network --name=serviceB -d serviceb:latest`
- `docker run -p 3000:3000 --network=my-microservices-network --name=serverApp -d serverapp:latest`

To check list of networks: `docker network ls`

To inspect the IP addresses assigned to containers using the following command:

```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' serviceA
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' serviceB
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' serverApp
```

In theory should be available URLs: http://172.17.0.8:3000/ which refers to API services: http://172.17.0.6:3001/ and http://172.17.0.7:3002/

But it's NOT possible to access via Browser on MacOS and it seems to be well known issue:

https://github.com/docker/for-mac/issues/2670#issuecomment-372365274

People suggest workaround related to some SOCKS settings, port 8888 and proxies.. I didn't try.




## Troubleshooting

A - Create Python server to test connectivity

- `docker exec -it serverApp python -m SimpleHTTPServer 3000`
- `curl http://172.17.0.4:3000`


B - Create Nginx server to test connectivity

- `docker run -d -p 8080:80 --name test-web-server nginx`
- `curl http://localhost:8080`
- `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' test-web-server`
- `curl http://172.17.0.2:8080` - ALSO IS NOT REACHABLE ON MacOS

- `docker exec -it serverApp ps aux | grep node`
> root         1  0.0  0.5 72x76 47x948 ?        Ssl  19:01   0:00 node server.js`

- `$ docker inspect serverApp | grep "NetworkMode"`
> "NetworkMode": "my-microservices-network",


## TODO later

- https://docs.docker.com/desktop/mac/permission-requirements/
- https://docs.docker.com/build/building/multi-stage/

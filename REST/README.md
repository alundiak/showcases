REST => CRUD
===

REST is an acronym that stands for **R**epresentational **S**tate **T**ransfer. 

It is an architectural style for designing networked applications, particularly web services. RESTful architectures use a stateless communication model, and they rely on standard HTTP methods for performing operations on resources.

The term "Representational State Transfer" was introduced by Roy Fielding in his doctoral dissertation in 2000, where he described the principles and constraints that define the REST architecture. REST has since become a popular approach for designing scalable and loosely coupled web services that can be easily consumed by a variety of clients.

My note: very frequent REST is associated explicitly with **CRUD** acronym, which is Create, Read, Update and Delete operations.

## REST name convention

- Use **standard HTTP methods** to perform operations on resources.
  - GET /users, POST /users, GET /users/{id}, PUT /users/{id} or PATCH /users/{id}, DELETE /users/{id}, etc.
- plural vs. singular
  - Use **plural nouns to represent resources**. For example, use `/users` instead of `/user`.
  - Use **plural nouns for collection endpoints** to indicate that multiple resources are being manipulated
    - `GET /users` to retrieve a list of users, `POST /users` to create a new user, etc.
  - Using plural nouns for collections (e.g., `/users`) and singular nouns for specific resources (e.g., `/user/{id}`) is a widely accepted convention and aligns with RESTful principles.
- Use **subresources to represent relationships between resources** 
  - `GET /users/{id}/posts`, `GET /users/{id}/comments`, etc
- nouns vs. verbs  
  - While the convention often suggests using nouns to represent resources, there are cases where using verb-noun combinations for certain actions is acceptable in RESTful API design.
    - `PATCH /approve-order` can be replaced by `PATCH /orders/{orderId}/approve`
    - `PATCH /reject-order` can be replaced by `PATCH /orders/{orderId}/reject`
- Use query parameters for filtering, sorting, or paginating resource collections
  - `GET /users?role=admin`, `GET /users?sort=name`, `GET /users?page=2&limit=10`
- Use appropriate HTTP status codes to indicate the success or failure of a request.


## PUT vs PATCH

PUT /users/{id}:

- Typically used when you want to _update or replace_ the **entire resource** with the new representation provided in the request payload.
- PUT is used when you want to replace the entire resource or _create it if it doesn't exist_.
- The request payload should contain the **complete** updated representation of the resource.
- If a property is not included in the payload, it's often assumed to be set to `null` or the default value.
- PUT is **considered idempotent**, meaning that making the same request multiple times has the same effect as making it once.

PATCH /users/{id}:

- Used when you want to apply **partial** updates to a resource. It allows you to send only the fields that need to be updated.
- The request payload should contain a set of **instructions** on how the resource should be modified.
- Any properties not included in the payload are assumed to remain unchanged.
- It is generally more **bandwidth-efficient** than PUT when updating only a subset of fields.
- PATCH is **not guaranteed to be idempotent**, and making the same request multiple times may have different effects.


## HTTP Statuses suggestions:

- 200 `OK` for successful GET 
- 200 `OK` for successful PATCH (update the status of an order (e.g., approving an order),)
- 201 `Created` for successful POST requests that create a new resource.
- 204 `No Content` for successful DELETE
  - "to indicate that the server successfully processed the request, but there is no additional information to send back in the response body."
  - "On the other hand, using `200 OK` is also a valid choice. It indicates that the request was successful, and you might include additional information in the response body if needed."
  - `200` and `204` are appropriate for indicating success when dealing with GET, PATCH, and DELETE operations.

- 400 `Bad Request` if the request is malformed.
- 401 `Unauthorized` Indicates that the request requires user authentication.
  - Purpose: Indicates that the request **lacks valid authentication** credentials.
- 403 `Forbidden` status code indicates that the server understood the request, but it refuses to authorize it. This status is similar to 401 (Unauthorized), but the client must authenticate itself to get permission.
  - Purpose: Indicates that the client is authenticated but **lacks the necessary permissions** to access the requested resource.
- 404 `Not Found` status code might be more appropriate when the order is not found or for a request to update or approve a non-existing resource. PATCH-related
- 409 `Conflict` is used to indicate that the request could not be completed due to a conflict with the current state of the target resource. This status code is often used in situations where there is a conflict between the client's request and the current state of the resource on the server.
  - When using conditional requests (e.g., with the `If-Match` or `If-None-Match` headers), a 409 response might be returned if the condition specified in the request headers is not met.
  - In systems with transactions, a 409 response might indicate a failure to commit a transaction due to a conflict with another transaction.

- 300 `Multiple Choices` the requested resource has multiple representations, each with its own specific location, and the user or user agent can choose among them.
- 301 `Moved Permanently` the requested resource has been permanently moved to a new location.
- 302 `Found` the requested resource resides temporarily under a different URL.
- 304 `Not Modified` the client's cached copy of the resource is still valid, and the server didn't need to send a new representation.

- 500 `Internal Server Error` - it's common to return a 5xx HTTP status code to indicate a server error where an operation fails due to an issue with a downstream service.


## ExpressJS notes

- Middleware is executed in the order it's declared in the code.
- Middleware declared before a route handler is executed before that route handler, and middleware declared after a route handler is executed after that route handler.
- Route handlers are matched in the order they are declared.
- Express processes each route handler in the order they are defined and stops when it finds a match.
- In an error handling middleware in Express.js, it's important to call `next()` to pass control to the next middleware or route handler in the chain.
  - This is particularly crucial in asynchronous code or if you have multiple error-handling middleware.
  - If you don't call `next()`, the request-response cycle might be terminated at the error handling middleware, and subsequent middleware or route handlers won't be executed.

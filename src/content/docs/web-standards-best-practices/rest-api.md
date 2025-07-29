---
title: REST API Basics
description: Learn the fundamentals of REST APIs, including key concepts, HTTP methods, and best practices.
category: Web Standards, Best Practices
---

# Basics of REST API

## What is a REST API?

- **REST** stands for **Representational State Transfer**.
- An **API** (Application Programming Interface) allows different software systems to communicate.
- A **REST API** is a web service that follows REST principles to enable clients (web apps, mobile apps, etc.) to interact with a server using standard HTTP methods.

## Key Concepts of REST API

1. **Resources**
   Everything is treated as a resource (data, object, service).
   Resources are identified by **URLs**.
   _Example:_ `https://api.example.com/users` refers to the users resource.

2. **HTTP Methods**
   REST APIs use standard HTTP methods to operate on resources:

   - **GET** — Retrieve data (read)
   - **POST** — Create a new resource
   - **PUT** — Update an existing resource completely
   - **PATCH** — Update an existing resource partially
   - **DELETE** — Remove a resource

3. **Statelessness**
   Each API call is independent.
   Server does **not** store client context between requests.
   All necessary info must be sent with every request.

4. **Representation**
   Resources can be represented in multiple formats, mostly **JSON** or **XML**.
   Server sends the resource’s current state in one of these formats.

5. **Uniform Interface**
   REST APIs have standardized communication: consistent URLs, HTTP methods, and status codes.

6. **HTTP Status Codes**
   Responses include status codes to indicate success or failure:
   - `200 OK` — Success
   - `201 Created` — Resource created
   - `400 Bad Request` — Client error
   - `401 Unauthorized` — Authentication needed or failed
   - `404 Not Found` — Resource missing
   - `500 Internal Server Error` — Server error

## Example of REST API interaction

| HTTP Method | URL          | Purpose                 |
| ----------- | ------------ | ----------------------- |
| GET         | `/users`     | Get list of users       |
| GET         | `/users/123` | Get user with ID 123    |
| POST        | `/users`     | Create a new user       |
| PUT         | `/users/123` | Update user with ID 123 |
| DELETE      | `/users/123` | Delete user with ID 123 |

## Comparison: REST API vs GraphQL vs SOAP

| Feature             | REST API                                                | GraphQL                                               | SOAP                                                  |
| ------------------- | ------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| **Data format**     | Typically JSON or XML                                   | JSON                                                  | XML                                                   |
| **Data retrieval**  | Multiple endpoints, fixed data per endpoint             | Single endpoint, clients specify exact data they want | Single endpoint, rigid contract-based                 |
| **Flexibility**     | Less flexible, over-fetching or under-fetching possible | Very flexible, fetch only required data               | Limited flexibility, strict schemas                   |
| **Protocol**        | Uses HTTP                                               | Uses HTTP                                             | Uses SOAP protocol over HTTP, SMTP, TCP               |
| **State**           | Stateless                                               | Stateless                                             | Can be stateful                                       |
| **Standardization** | Less strict, uses HTTP standards                        | Less standardized                                     | Highly standardized with strict contracts             |
| **Ease of use**     | Simple, widely supported                                | More complex, requires schema definition              | More complex, heavyweight                             |
| **Use cases**       | Public APIs, web/mobile apps                            | Complex queries with many nested data                 | Enterprise, legacy systems, transactional reliability |

## Summary

- REST API uses HTTP methods and URLs to operate on resources.
- It is stateless and commonly exchanges JSON data.
- Compared to GraphQL and SOAP, REST is simpler and more widely used but can suffer from over-fetching or multiple endpoints.
- GraphQL offers flexible queries at a single endpoint.
- SOAP provides strict standards and is used mainly in enterprise environments.

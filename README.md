# [Concept Focus: HTTP & Web APIs](http://jsdev.learnersguild.org/goals/326-Concept_Focus-HTTP_and_Web_APIs.html)

## Jorge Lopez & Benjamin Pettus

Explore the inner workings of HTTP, and apply your knowledge to interact with an external web API.

Concept focus goals like this one have some unique characteristics. If this is your first time working on one, read the Context for more information.

In working on this goal, you should explore concepts like:

The HTTP request-response cycle
HTTP verbs
URL components: host, path, query string
Routing web requests
Serving static resources
Interacting with an external web API
For guidance and support, start with the Resources provided.

## Specifications

- [x] Artifact produced is a GitHub repo.
- [x] GitHub repo contains a web server.
- [x] Can run the command npm start to start the web server at port 3000.
- [x] The web server source code is written using the Express library.
- [x] The web server handles routes for the following HTTP verbs
    - [x] GET
    - [x] POST
    - [x] PUT/PATCH
    - [x] DELETE
- [ ] Examples of each HTTP verb usage are listed and linked to in the README
- [ ] The web server makes use of the following response status codes
    - [ ] 200 (OK)
    - [ ] 201 (Created)
    - [ ] 400 (Bad Request)
    - [ ] 301 (Moved Permanently)
    - [ ] 403 (Forbidden)
    - [ ] 404 (Not Found)
    - [ ] 500 (Internal Server Error)
- [ ] Examples of each status code usage are listed and linked to in the README
- [x] The web server uses URL components in routing and responding
    - [x] Different paths trigger different routes
    - [x] Values from the URL query string are used in a route
- [ ] Examples of routing and query string usage are listed and linked to in the README
- [ ] The web server makes use of the following request headers
    - [ ] Accept
    - [ ] Origin
    - [x] Content Type
    - [x] Authorization
    - [ ] Cookie
- [ ] Examples of each request header usage are listed and linked to in the README
- [ ] The web server makes use of the following response headers
    - [ ] Location
    - [ ] Set-Cookie
    - [ ] Refresh
    - [ ] Access-Control-Allow-Origin
    - [x] Content-Length
- [ ] Examples of each response header usage are listed and linked to in the README
- [x] The web server serves different types of resources
    - [x] Asset files (CSS, images)
    - [x] Static HTML
    - [x] Static JSON
    - [x] Dynamic resources (content of response changes based on query params, request headers, and/or application state)
- [ ] Examples of each response type are listed and linked to in the README
- [ ] Example of a raw HTTP request and the server’s raw HTTP response are included in the README
    - [ ] Examples show full HTTP message header
    - [ ] Examples show full HTTP message body
- [x] The web server makes the following request types to an external API
    - [x] Get a resource
    - [x] Create a resource
    - [x] Update a resource
    - [x] Delete a resource
- [ ] Examples of each request type to the external API are listed and linked to in the README
- [ ] The best resources you find for learning testing are added to a file resources.md
- [x] The artifact produced is properly licensed, preferably with the MIT license

## Stretch

- [ ] Web server is written using only the core Node.js modules (instead of Express, use the built-in HTTP module)
- [x] Web server uses OAuth to authenticate with the external API
- [ ] OAuth routes are listed and linked to in the README
- [ ] The web server exposes a JSON API at /api
- [x] API supports all CRUD actions for a resource (Create, Read, Update, Delete)
- [ ] API follows a the RESTful design convention
- [x] API doesn’t use database persistence (an in-memory store is fine)
- [ ] Basic documentation for the API and each route is included in the README

## Resources

Courses, Tutorials, Articles

Treehouse course on HTTP Basics (67-minute Development Tools Course)
Overview of HTTP from NTU Singapore
Tips on HTTP from Tuts+
Beginner’s Guide to HTTP and REST from Tuts+
Mozilla Developer Network’s Guide to HTTP
30 min course on the Basics of HTTP
Article on How the Web Works
Tools

Postman is a nice GUI for building HTTP requests
curl is a super useful tool for making HTTP requests from the command line
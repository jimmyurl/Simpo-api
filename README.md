# Simpo-api
A simple Node.js application that uses the Express.js framework to create a basic API for retrieving recipe information and handling query string parameters. 

Here's a how you can a similar simpo API:

1. **Imports**: Start by importing the `express` library and creating an instance of the Express application.

2. **Recipes Data**: Create an array named `recipes` that contains a list of recipe items. Each recipe has an `id` and a `name`. This array will serve as your mock data for the API.

3. **Root Route**: Define a root route (`/`) using the `app.get()` method. When a user accesses the root of your API, it responds with the string 'Ugali Kitimoto'.

4. **List Recipes Route**: Define a route at `/api/recipes` using `app.get()`. When users access this route, the API responds with the `recipes` array, effectively returning the list of recipes in JSON format.

5. **Get Recipe by ID Route**: Define a route at `/api/recipes/:id` using `app.get()`. This route expects a dynamic parameter `id` in the URL, which is used to find a specific recipe in the `recipes` array by matching the `id` field. If a matching recipe is found, it is sent as a JSON response. If no matching recipe is found, it returns a 404 status code with an error message.

6. **Query String Parameter Route**: Define a route at `/api/posts/:year/:month` using `app.get()`. This route is used to demonstrate how to handle query string parameters. When users access this route, it responds with the query parameters sent in the request, effectively echoing back any query parameters provided.

7. **Port Configuration**: Specify that the API should listen on the port defined in the `process.env.PORT` variable, which allows you to use the port specified in the environment variable when deploying the application. If no port is provided, it defaults to port 3000. The application logs a message indicating that it's ready and listening on the specified port.

To summarize, the API provides the following routes:

- `GET /` - Returns the string "Ugali Kitimoto."
- `GET /api/recipes` - Returns the list of recipes in JSON format.
- `GET /api/recipes/:id` - Returns a specific recipe by its `id` in JSON format or a 404 error if not found.
- `GET /api/posts/:year/:month` - Returns the query string parameters passed in the request.

You can start this application, and it will serve as a simple API for recipe data and query parameter handling.

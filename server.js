// Requires the Express module and sets up our Express application.
// With app, you can configure and add functionality to your server.
// eslint-disable-next-line no-undef
const express = require("express");
const app = express();

const urlLogger = (request, response, next) => {
  console.log("Request URL:", request.url);
  next();
};
const timeLogger = (request, response, next) => {
  console.log("Datetime:", new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static("public"));

// Route handler
// app.get() creates a route handler to listen for GET requests from a client.
// eslint-disable-next-line no-unused-vars
app.get("/", (request, response) => {
  //response.send("hello world");
});

app.get("/json", (request, response) => {
  response.status(200).json({"name": "Robbie"});
});

// TTells the server to start listening for connections on a particular port,
// When the server is ready to listen for connections, the callback is called and
// logs message in the terminal.
app.listen(3000, () => {
  console.log("Express intro running on localhost:3000");
});

// Most HTML, CSS, images, and client-side JavaScript files as static assets.

const express = require("express"); // import express
const app = express(); // create an instance of express
const port = process.env.PORT || 80; // create a port object, process.env.PORT will be used by Azure

app.get("/", (request, response) => {
  response.send("Hello, World!");
}); // Create a GET response

app.listen(port, () => {
  console.log(`Listening on port: ${port.toString()} `);
}); // Register app on port

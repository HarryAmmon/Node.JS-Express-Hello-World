const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (request, response) => {
  response.send("Hello, World!");
});

app.set("port", process.env.PORT);

app.listen(port, () => {
  console.log(`Listening on port: ${port.toString()} `);
});

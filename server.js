var express = require("express");
var app = express();
const bodyParser = require("body-parser");
var fs = require("fs");
var cors = require("cors");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

const routes = require("./routes/routes.js")(app, fs);

// Create a server to listen at port 8080
const server = app.listen(8080, () => {
  console.log("listening on port %s...", server.address().port);
});

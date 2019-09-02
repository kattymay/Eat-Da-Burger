// Dependencies
var express = require("express");
var bodyParser = require('body-parser');

// Establish POET
var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content from public
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes 
var routes = require("./controllers/burgers_controller.js");
// Use routes
app.use(routes);

// Start server 
// Listening for requests
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

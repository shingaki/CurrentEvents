var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
// var axios = require("axios");
// var cheerio = require("cheerio");

var PORT = process.env.PORT || 8000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Require all models
var db = require("./models");




// Use morgan logger for logging requests
app.use(logger("dev"));


// Connect to the Mongo DB - locally only
// mongoose.connect("mongodb://localhost/currentEvents", { useNewUrlParser: true });

// connect to Mongo DB on heroku
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);




// var MONGODB_URI = process.env.MONGODB_URI

module.exports = db;


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});

// Require modules
const express = require("express");
const path = require("path");
// Create the Express app
const tododb = require("./data/todo-db");
const app = express();

// const todoDb = require("./data/todo-db");

// Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Mount middleware (app.use)

app.get("/", function(req, res) {
  res.redirect("/index");
});

app.get("/index", function(req, res) {
  res.render("index", {
    todos: tododb.getAll()
  });
});

// app.post();
// Mount routes

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log("Listening on port 3000");
});

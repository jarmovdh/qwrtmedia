//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require ("request");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/iceland.html");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

var path = require("path");
const  Workout  = require("../models");

module.exports = function(app) {
  //Get all the excercises 
  // app.get("*", function(req, res) {
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //Get specific exercises
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  //Get the stats
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};

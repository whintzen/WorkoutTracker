var db = require("../models");

  // module.exports = function(app) {
  //   app.get("/api/images", function(req, res) {
  //     db.Image.find({}).then(function(dbImages) {
  //       res.json(dbImages);
  //     });
  //   });

    // app.put("/api/images/:id", function(req, res) {
    //   db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
    //     res.json(dbImage);
    //   });
    // });

  // Access the Database Workout and table Workouts 
module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
      db.Workout.find({}).then(function(dbWorkouts) {
        res.json(dbWorkouts);
      });
    });

  //add a new workout exercise to the database
  app.post("/api/workouts", function({ body }, res) {
    db.Workout.create(body).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  //update a workout exercise in the database
  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.findOneAndUpdate({_id:req.params.id}, {$set: {exercises: req.body}}, { new: true }).then(function(dbWorkouts) {      
      res.json(dbWorkouts);
    });
  });

  //Read the Stats.js file and displays all graphs( line, bar, pie and donut) with all the statistics of the workouts
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).populate("workouts").then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
};

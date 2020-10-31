var db = require("../models"); 

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
 
  // Updates the database
  app.put("/api/workouts/:id", function(req, res){
    db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises:req.body}}, { new: true }).then(function(dbWorkouts) {
        res.json(dbWorkouts)
    });
  });
  
  //Read the Stats.js file and displays all graphs( line, bar, pie and donut) with all the statistics of the workouts
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).populate("workouts").then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });  

};

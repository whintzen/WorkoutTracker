const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercise: [{
        type: {
          type: String,
          trim: true,
          required: "What type of Exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "What is the name of the Excercise"
        },
        duration: {
          type: Number
          // required: "Duration of Exercise in Minutes"
        },
        weight: {
          type: Number
          // required: "What weight do you want to use"    
        },
        reps: {
          type: Number
          // required: "Enter the Number of Reps"
        },
        sets: {
          type: Number
          // required: "Enter the Number of Sets"
        },
        distance: {
          type: Number
          // required: "What is the Distance Traveled"
        }        
    }
  ]
},
  // {
  //   toJSON: {
  //     // include any virtual properties when data is requested
  //     virtuals: true
  //   } 
  // }
);

// adds a dynamically-created property to schema
// workoutSchema.virtual("totalDuration").get(function () {
//   // "reduce" array of exercises down to just the sum of their durations
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });

 
//Connection to the mongoose database
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

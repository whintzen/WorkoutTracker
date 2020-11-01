const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");
const PORT = process.env.PORT || 3000;

// const Workout = require("./models/workout.js");
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true 
});


// Routes
// =============================================================
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
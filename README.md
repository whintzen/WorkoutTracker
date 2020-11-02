# Workout Tracker  :running_woman: :weight_lifting_woman:

Mongo Database
A workout tracker that uses Mongo database, Mongoose schema, and handle routes with Express. burger App with MySQL, Node, Express, Handlebars and an ORM. Uses Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

## Concept
Workout Tracker is a workout app that lets users track their workouts.  It is believed that a user can reach their fitness goals more quickly when they track their workout progress.   The user enters the workouts they completed each day, whether at the gym or at home.  Those excercises can be Cardio or Resistance only on a given day or it can be a combination of Cardio and Resistance workouts.

## User Story
* As a user, I want to be able to view, create and
  track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## How the Process Works
* Open a terminal and run `npm install` to create
  the node_modules folder.
* Run `npm run seed`, as this will allow the mongo
  database to refresh itself by deleting any old records/data and pre-populate the database with 9 records to start with.  
* Run `node server.js`, this will connect you to
  the MySQL database on server PORT 3000.  Open a browser and type `http://localhost:3000/` or `localhost:3000` and hit enter.  This will display the Workout Tracker App Home Page, displaying the `Last workout` completed and when.  There is a button to `Enter a new Workout` and another button to `Continue Workout` (this one is used after you have started a workout and did not complete).  In the upper left corner, there are two buttons, `Fitness Tracker` which wen clicked brings you back to the Home Page and `Dashboard`, when clicked will display the statistics of the user workout efforts.   The left side of the dashboard will display a line graph showing the number of workout minutes per day.  The right side of the dashboard displays the number of pounds used in the resistance workouts per day.  To go back to the home page from the Dashboard page, click the link in the upper left corner.     

## Tools:
 * Node
 * Express
 * Mongoose schema
 * Mongodb - in order to load and store the
   Workout Tracker data 
 * Models        
 * Package json 
 * CSS
 * HTML 
 
## Links:
  * Github Repository: 
    [Github](https://github.com/whintzen/WorkoutTracker)
  
  * Screencastify video: 
    [Video](https://drive.google.com/file/d/1RWtuk18CH5-SxUaRS9qCbb2eEGsJiuE9/view?usp=sharing)  

  * Display App in Heroku
    [Heroku App](https://infinite-forest-28500.herokuapp.com/)

  * Workout Tracker App Images
     ![Image of The Hamburger App](https://github.com/whintzen/WorkoutTracker/blob/master/images/Workout_Tracker_Homepage.jpg)

     ![Image of The Hamburger App](https://github.com/whintzen/WorkoutTracker/blob/master/images/Workout_Tracker_Entryform.jpg)

     ![Image of The Hamburger App](https://github.com/whintzen/WorkoutTracker/blob/master/images/Workout_Tracker_Dashboard.png)
  

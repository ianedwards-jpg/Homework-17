const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.get("/exercise")

// router.get("/stats")
// //Make sure to return static HTML 
// //res.sendfile 

// router.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/exercise.html"));
// });

// router.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/stats.html"));
// });


module.exports = router;

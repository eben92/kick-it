const express = require("express");
const Workout = require("../models/workoutModel");
const {
  getAllWorkouts,
  addWorkout,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// get all workouts
router.get("/", getAllWorkouts);

// get all workouts
router.get("/:id", getSingleWorkout);

// post a workout
router.post("/", addWorkout);

// delete a workout
// adde a delete route to delete a workout using req.params.id

router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);
module.exports = router;

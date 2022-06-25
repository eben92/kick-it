const mongoose = require("mongoose");
const workoutModel = require("../models/workoutModel");

// get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const data = await workoutModel.find();
    if (data.length) {
      res.status(200).json({ msg: "workout found", results: data });
    } else {
      res.status(404).json({ msg: "no workout found" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get single workout
const getSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (mongoose.isValidObjectId(id)) {
      const data = await workoutModel.findOne({ _id: id });
      if (data) {
        res.status(200).json({ msg: "workout found", results: data });
      } else {
        res.status(404).json({ msg: "no workout found" });
      }
    } else {
      res.status(400).json({ msg: "invalid id" });
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

//  post workout
const addWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;
    const data = await workoutModel.create({ title, reps, load });
    res.status(201).json({ msg: "succes", data });
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

// update workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (mongoose.isValidObjectId(id)) {
      const data = await workoutModel.findOneAndUpdate({ _id: id }, req.body);
      if (data) {
        res
          .status(200)
          .json({ msg: "workout updated successfully", results: req.body });
      } else {
        res.status(404).json({ msg: "no data found" });
      }
    } else {
      res.status(400).json({ msg: "invalid id" });
    }
  } catch (error) {
    res.status(401).json({ msg: error.message });
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (mongoose.isValidObjectId(id)) {
      const data = await workoutModel.findByIdAndDelete({ _id: req.params.id });
      if (data) {
        res.status(201).json({ msg: "success" });
      } else {
        res.status(404).json({ msg: "no data found" });
      }
    } else {
      res.status(400).json({ msg: "invalid id" });
    }
  } catch (error) {
    res.status(401).json({ msg: "failed. try again later" });
  }
};

module.exports = {
  getAllWorkouts,
  deleteWorkout,
  addWorkout,
  updateWorkout,
  getSingleWorkout,
};

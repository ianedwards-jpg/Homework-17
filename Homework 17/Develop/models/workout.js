const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    default: "resistance"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
  },
  duration: {
    type: Number,
    required: "Enter (in seconds) a duration"
  },
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  reps: {
    type: Number,
    required: "Enter a number of reps"
  },
  sets: {
    type: Number,
    required: "Enter a number of sets"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

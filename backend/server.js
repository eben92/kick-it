require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method); // logs the path and method of every request
  next();
});

// routes
// app.get("/", (req, res) => {
//   res.json({ msg: "Hello World" });
// });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected and listening on port", process.env.PORT);
    });

    // e.g this will fire when a request is made to "/api/workouts/:name"

    app.use("/api/workouts", workoutRoutes);
  })
  .catch(console.log());

// listen for request
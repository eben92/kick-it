import React, { useState } from "react";
import { addWorkout } from "../../restServices";

const Form = ({ getWorkouts }) => {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    load: "",
    title: "",
    reps: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addWorkout(inputData);
      // console.log(data);
      setInputData({ load: "", title: "", reps: "" });
      getWorkouts();
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setError("");
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>

      <label> Exercise Title: </label>
      <input
        type='text'
        name='title'
        onChange={handleChange}
        value={inputData.title}
      />

      <label> Load (in kg): </label>
      <input
        type='number'
        name='load'
        onChange={handleChange}
        value={inputData.load}
      />

      <label> Reps: </label>
      <input
        type='number'
        name='reps'
        onChange={handleChange}
        value={inputData.reps}
      />

      <button disabled={loading}>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Form;

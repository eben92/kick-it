import axios from "axios";
const baseUrl = "https://mernapp233.herokuapp.com/api/";

const restAgent = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const getRequestCofig = () => {
  return { params: {}, headers: {} };
};

const getAllWorkouts = async () => {
  const config = getRequestCofig();
  return restAgent.get(`workouts`, config);
};

const addWorkout = async (workout) => {
  const config = getRequestCofig();
  return restAgent.post(`workouts`, workout, config);
};

const deleteWorkout = async (id) => {
  const config = getRequestCofig();
  return restAgent.delete(`workouts/${id}`, config);
};

export { getAllWorkouts, addWorkout, deleteWorkout };

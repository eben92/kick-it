import axios from "axios";
const baseUrl = "http://localhost:4000/api/";

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

export { getAllWorkouts };

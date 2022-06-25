const baseUrl = "http://localhost:4000/api/";

const getAllWorkouts = async () => {
  const response = await fetch(`${baseUrl}workouts`);
  const json = await response.json();
  return json;
};

export { getAllWorkouts };

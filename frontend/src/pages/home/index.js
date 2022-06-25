import { useEffect, useState } from "react";
import { getAllWorkouts } from "../../restServices";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWorkouts();
  }, []);
  const getWorkouts = async () => {
    setLoading(true);
    try {
      const {
        data: { results },
      } = await getAllWorkouts();
      console.log(results);
      setWorkouts(results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts.map((item) => (
          <div key={item._id} className='workout-details'>
            <h4>{item.title}</h4>
            <p>
              <strong>Load (kg): </strong> {item.load}
            </p>
            <p>
              <strong>Reps: </strong> {item.reps}
            </p>

            <p>{item.createdAt.slice(0, 10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

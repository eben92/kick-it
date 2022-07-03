import { useEffect, useState } from "react";
import { Form } from "../../components";
import { getAllWorkouts, deleteWorkout } from "../../restServices";

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
      // console.log(results);
      setWorkouts(results.reverse());

      // const dd = [1,3,5];
      // dd.reverse()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (itemId) => {
    try {
      await deleteWorkout(itemId);
      getWorkouts();
      // console.log(data);
    } catch (error) {
      console.log(error);
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
            <span onClick={() => handleDelete(item._id)}>delete</span>
          </div>
        ))}
      </div>
      <Form getWorkouts={getWorkouts} />
    </div>
  );
};

export default Home;

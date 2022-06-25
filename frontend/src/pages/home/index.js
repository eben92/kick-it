import { useEffect, useState } from "react";
import { getAllWorkouts } from "../../restServices";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(getAllWorkouts());
  }, []);

  return <div>Home</div>;
};

export default Home;

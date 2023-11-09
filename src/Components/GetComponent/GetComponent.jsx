import { useEffect, useState } from "react";

const GetComponent = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch("/http://localhost:5000/food")
      .then(res => res.json())
      .then(data => setFoodData(data));
  }, []);

  return { foodData };
};
export default GetComponent;

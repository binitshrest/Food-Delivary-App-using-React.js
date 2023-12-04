import { useState, useEffect } from "react";
import { Swiggy_API } from "./constants";

const useTopRestro = () => {
  const [topRestro, setTopRestro] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_API);

    const json = await data.json();

    setTopRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return topRestro;
};

export default useTopRestro;

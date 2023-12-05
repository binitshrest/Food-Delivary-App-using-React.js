import { useState, useEffect } from "react";
import { Swiggy_API } from "./constants";
const useFilteredRestro = () => {
  const [filteredRestraurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_API);
    const json = await data.json();

    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filteredRestraurant;
};

export default useFilteredRestro;

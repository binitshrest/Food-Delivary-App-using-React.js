import { Swiggy_API } from "./constants";
import { useState, useEffect } from "react";

const useFilter = () => {
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_API);
    const json = await data.json();

    setFilters(json?.data?.cards[4]?.card?.card?.facetList);
  };
  return filters;
};

export default useFilter;

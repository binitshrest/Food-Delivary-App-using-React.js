import { useEffect, useState } from "react";
import { Swiggy_API } from "./constants";

const useCusines = () => {

  const [cusinesInfo, setCusinesInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
     Swiggy_API
    );
    const json = await data.json();

    setCusinesInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };
  return cusinesInfo;
};

export default useCusines;

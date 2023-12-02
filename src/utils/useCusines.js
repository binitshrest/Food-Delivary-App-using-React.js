import { useEffect, useState } from "react";

const useCusines = () => {

  const [cusinesInfo, setCusinesInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.933996&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setCusinesInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };
  return cusinesInfo;
};

export default useCusines;

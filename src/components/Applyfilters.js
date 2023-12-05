import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import FilterPopsUp from "./FilterPopsUp";
import useListOfRestro from "../utils/useListOfRestro";
import useFilteredRestro from "../utils/useFilteredRestro";
import { Swiggy_API } from "../utils/constants";

const Applyfilters = () => {
  const [openPops, setOpenPops] = useState(false);
  // const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const listOfRestaurants = useListOfRestro();
  return (
    <div className="flex ml-4 space-x-4">
      <button
        className="h-10 w-24 rounded-2xl border border-solid bg-white shadow-md"
        onClick={() => setOpenPops(true)}
      >
        <span className="p-2">Filter</span>
        <FontAwesomeIcon icon={faArrowUpZA} style={{ color: "#000000" }} />
      </button>
      {/* <FilterPopsUp open={openPops} onClose={setOpenPops(false)} /> */}
      <button className="h-10 w-24 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Sort By</span>
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "#000000" }} />
      </button>
      <button className="h-10 w-28 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Fast Delivary</span>
      </button>
      <button className="h-10 w-32 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">New on Swiggy</span>
      </button>
      <button
        className="h-10 w-28 rounded-2xl border border-solid bg-white shadow-md"
        // onClick={() => {
        //   const filteredRestaurant = listOfRestaurants.filter(
        //     (res) => res.info.avgRating > 4
        //   );
        //   setFilteredRestaurant(filteredRestaurant);
        // }}
      >
        <span className="p-2">Rating 4.0+</span>
      </button>
      <button className="h-10 w-24 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Pure Veg</span>
      </button>
      <button className="h-10 w-20 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Offers</span>
      </button>
      <button className="h-10 w-32 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Rs.300-Rs.600</span>
      </button>
      <button className="h-10 w-36 rounded-2xl border border-solid bg-white shadow-md">
        <span className="p-2">Less than Rs.300</span>
      </button>
    </div>
  );
};

export default Applyfilters;

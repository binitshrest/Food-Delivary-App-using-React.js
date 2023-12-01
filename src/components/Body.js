import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard, { withpromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import BannerCard from "./BannerCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  //local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withpromotedLabel(RestaurantCard);
  //when state variable update, react trigger reconciliation cycle(re-renders the component)
  // console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.933996&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json(); //converting data into json;
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //custom hook
  // const bannerInfo = useBanner();

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 && listOfRestaurants ? ( //ternary operator
    <Shimmer />
  ) : (
    <div className="body w-9/12 mx-auto">
      <BannerCard />
      <div className="filter flex justify-between items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black h-[40px] w-[250px] rounded-2xl p-4  "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg border"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                //lowering the case of input and api value
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(filteredRestaurant);

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating < 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            <h4>Filter Restro with less than 3 star Rating</h4>
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label className="p-2">Username: </label>
          <input
            className="border border-black p-2 rounded-xl"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="card-ts"
          >
            {
              /* if the restaurant is promoted then add a promote label to it. */
              restaurant.info.aggregatedDiscountInfoV3 === undefined ? (
                <RestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCardPromoted resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

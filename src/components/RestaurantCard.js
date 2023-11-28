import UserContext from "../utils/UserContext";
import { CDN_LINK } from "../utils/constants";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="res-card m-6 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        alt="res-logo"
        className="res-logo rounded-lg"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-extrabold py-4 text-xl">{name}</h3>
      <h4 className="py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">Offers: {costForTwo}</h4>
      <h4 className="py-1">Delivary Time: {deliveryTime} mins</h4>
      <h4 className="flex mt-6 items-center">
        <img
          className="w-6 mr-2"
          src="https://img.icons8.com/flat-round/64/000000/star--v1.png"
          alt="star--v1"
        />
        Ratings: {avgRating}
      </h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

//input - RestaurantCard => RestaurantCardPromoted

export const withpromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;

    const { discountTag, header, subHeader } =
      resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <label className="bg-black text-white absolute m-2 p-2 top-2 w-35 rounded-lg opacity-75">
          {discountTag} {header} {subHeader}
        </label>
        {/* <RestaurantCard resData={resData} /> */}

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

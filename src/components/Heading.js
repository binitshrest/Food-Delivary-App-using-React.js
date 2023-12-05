import { LOGO_LINK } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Heading = () => {
  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Sign In"); //1st para is varaible 2nd is setter fn

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is [btnName] => called everytime btnName is updated

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);

  //Subsrcibing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-white shadow-lg mb-2">
      <div className="mt-4 ml-28">
        <Link to="/">
          <img className="w-10" src={LOGO_LINK} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="hidden lg:flex p-4 m-4">
          <li className="px-4 font-medium text-lg hover:text-orange-400 items-center">
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
              <span className="mx-3">Search</span>
            </Link>
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/offers">
              Offers<sup className="m-1 text-orange-400">New</sup>
            </Link>
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/help">Help</Link>
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login px-4 font-medium text-lg hover:text-orange-400"
            onClick={() => {
              btnName === "Sign In"
                ? setBtnName("Sign Out")
                : setBtnName("Sign In");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;

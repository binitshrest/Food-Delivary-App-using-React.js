import { LOGO_LINK } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Heading = () => {
  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login"); //1st para is varaible 2nd is setter fn

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render(just once)
  //if dependency array is [btnName] => called everytime btnName is updated
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);

  //Subsrcibing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="mt-4 ml-10 left-3">
        <img className="w-10" src={LOGO_LINK} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-medium text-lg hover:text-orange-400">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login px-4 font-medium text-lg hover:text-orange-400"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
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

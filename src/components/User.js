import { useEffect, useState } from "react";
const User = (props) => {
  const { name, location, contact } = props;
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    fetchUser();
    //For API calls
  }, []);

  const fetchUser = async () => {
    const data = await fetch("");
  };
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location} </h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

export default User;

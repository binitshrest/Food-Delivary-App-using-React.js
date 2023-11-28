import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Binit Shrestha",
});

export default UserContext;

// creating user context can let you access any where in the app.

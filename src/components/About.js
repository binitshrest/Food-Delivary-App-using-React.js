import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent contructor");
  }

  componentDidMount() {
    // console.log("Parent Component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1 className="font-bold text-5xl mb-4">About Us</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2 className="text-3xl">This is about us page</h2>
        <UserClass name="first" location="Bangalore!!!" />
        {/* <UserClass name="second" location="US" /> */}
      </div>
    );
  }
}

export default About;

// ? React Life Cycle diagram
// !https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// -Parent Constructor
// -Parent render

//   -First Constructor
//   -First Render

//   -Second Constructor
//   -Second Render

//   <DOM updated- IN SINGLE BATCH>

//   -First ComponentDidMount
//   -Second ComponentDidMount

// -Parent ComponentDidMount

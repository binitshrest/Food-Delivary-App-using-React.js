import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(props);
    // console.log(this.props.name + " child constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");
    //API call we do over here
    const data = await fetch("https://api.github.com/users/binitshrest");
    const json = await data.json(); //converting data to json;

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component has unmounted!");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log(this.props.name + " child render");

    return (
      <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
        <img
          className="w-52 mb-4 rounded-full"
          src={avatar_url}
          alt="avatar-logo"
        />
        <h2 className="font-bold text-xl">Name: {name}</h2>
        <h3 className="font-normal text-xl">Location: {location}</h3>
        <h3 className="font-normal text-xl">Contact: @Binitshrest01</h3>
      </div>
    );
  }
}

export default UserClass;

//constructor -> render() -> componentDidMount()

/* ---Mounting------
constructor (dummy)
Render(dummy)
      <html Dummy>
ComponentDidMount
      <API calls>
      this.setState> -> State variable is updated
----UPDATE
       render(API data)
       <html> (new API data)
       componentDidUpdate*/

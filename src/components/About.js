import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        About
        <UserClass name={"rafeek"} location={"perambaurs-621212"} />
      </div>
    );
  }
}

export default About;

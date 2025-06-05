import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button>
        <h1>count2:{count2}</h1>
        <h2>Name:{name}</h2>
        <h3>Locatin:{location}</h3>
        <h4>Contact:5245896</h4>
      </div>
    );
  }
}

export default UserClass;

import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seld: "blue" };
  }
  render() {
    return <h2>{this.state.seld}</h2>;
  }
}
export default Test;

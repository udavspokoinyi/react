import React from "react";
import { Media } from "reactstrap";
function RenderLeaders(props) {
  return props.leaders.map((leader, pos) => {
    return (
      <Media className="m-5" key={pos}>
        <img src={leader.image} className="" />
        <Media body className="ml-5 ">
          <h3>{leader.name}</h3>

          <p>{leader.description}</p>
        </Media>
      </Media>
    );
  });
}

export default RenderLeaders;

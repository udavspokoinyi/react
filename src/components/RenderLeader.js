import React from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
function RenderLeaders(props, isLoading, errMess) {
  return props.leaders.leaders.map((leader, pos) => {
    return (
      <Media className="m-5" key={pos}>
        <img src={baseUrl + leader.image} className="" />
        <Media body className="ml-5 ">
          <h3>{leader.name}</h3>

          <p>{leader.description}</p>
        </Media>
      </Media>
    );
  });
}

export default RenderLeaders;

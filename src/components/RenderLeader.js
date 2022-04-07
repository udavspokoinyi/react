import React from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

import { Fade, Stagger } from "react-animation-components";
function RenderLeaders(props) {
  return (
    <Stagger in>
      {props.leaders.leaders.map((leader, pos) => {
        return (
          <Fade in key={pos}>
            <Media className="m-5">
              <img
                src={baseUrl + leader.image}
                alt=""
                className=""
                type="image"
              />
              <Media body className="ml-5 ">
                <li>{leader.name}</li>
                <li>{leader.description}</li>
              </Media>
            </Media>
          </Fade>
        );
      })}
    </Stagger>
  );
}

export default RenderLeaders;

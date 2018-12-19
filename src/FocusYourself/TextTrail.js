import React from "react";

import { Trail } from "react-spring";

import { Fade } from "@material-ui/core";

const TextTrail = ({ items, Component, fadeProp }) => {
  // let thisPurchase = purchase;
  // console.log(thisPurchase);
  return (
    <Trail
      items={items}
      keys={item => items.indexOf(item)}
      from={{
        opacity: 0,
        display: "inline-block",
        transform: "translate3d(0,-40px,0)",
        marginRight: "10px"
      }}
      to={{
        opacity: 1,
        display: "inline-block",
        transform: "translate3d(0,0px,0)",
        marginRight: "10px"
      }}
    >
      {item => props => {
        return (
          <Fade in={fadeProp} timeout={1000}>
            <span>
              <Component style={props}>{item}</Component>
            </span>
          </Fade>
        );
      }}
    </Trail>
  );
};

export default TextTrail;

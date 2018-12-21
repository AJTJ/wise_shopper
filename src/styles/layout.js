import React from "react";
import { Grid as MGrid, Card as MCard } from "@material-ui/core";

//tools
import { randomColor } from "../tools/randomColor";

export const BackgroundGrid = ({ alpha, children }) => {
  return (
    <MGrid
      style={{
        backgroundColor: randomColor(alpha),
        transition: "all 1s",
        height: "100vh"
      }}
    >
      {children}
    </MGrid>
  );
};

export const QuizGrid = props => {
  return (
    <MGrid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{
        position: "relative",
        maxWidth: "500px",
        margin: "0 auto",
        paddingTop: "75px",
        paddingBottom: "10px",
        paddingRight: "20px",
        paddingLeft: "20px",
        maxHeight: "600px"
      }}
    >
      {props.children}
    </MGrid>
  );
};

export const MyCard = ({ opacity, children }) => {
  return (
    <MCard
      style={{
        borderRadius: "10px",
        backgroundColor: `rgba(255,255,255,${opacity})`,
        padding: "25px",
        minWidth: "300px"
      }}
    >
      {children}
    </MCard>
  );
};

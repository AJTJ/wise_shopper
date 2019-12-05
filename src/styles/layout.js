import React from "react";
import { Grid as MGrid, Card as MCard } from "@material-ui/core";

//tools
import { randomColor } from "../tools/randomColor";

const logo = require("../resources/dark_flake.png");

export const BackgroundGrid = ({ alpha, children }) => {
  return (
    <MGrid
      style={{
        backgroundColor: randomColor(alpha),
        transition: "all 1s",
        minHeight: "100vh"
      }}
    >
      <img
        src={logo}
        alt=""
        style={{
          position: "absolute",
          zIndex: "-1",
          height: "100vh",
          opacity: "0.04",
          left: -250
        }}
      />
      {children}
    </MGrid>
  );
};

export const QuizGrid = props => {
  console.log("the props", props);
  const { styles = {} } = props;
  const quizGridStyles = {
    position: "relative",
    maxWidth: "500px",
    margin: "0 auto",
    paddingTop: "75px",
    paddingBottom: "10px",
    paddingRight: "20px",
    paddingLeft: "20px",
    // maxHeight: "600px"
    ...styles
  };

  return (
    <MGrid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={quizGridStyles}
    >
      {props.children}
    </MGrid>
  );
};

export const MyCard = props => {
  const { children, styles = {} } = props;
  return (
    <MCard
      style={{
        position: "relative",
        borderRadius: "10px",
        backgroundColor: `rgba(255,255,255)`,
        padding: "25px",
        minWidth: "300px",
        boxShadow: "none",
        ...styles
      }}
    >
      {children}
    </MCard>
  );
};

export const TipCard = ({ opacity, children }) => {
  return (
    <MCard
      style={{
        fontFamily: "Thasidth, sans-serif",
        borderRadius: "5px",
        backgroundColor: `rgba(255,255,255,${opacity})`,
        padding: "10px",
        boxShadow: "none"
      }}
    >
      {children}
    </MCard>
  );
};

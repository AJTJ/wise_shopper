import React from "react";

import { Fade } from "@material-ui/core";

export default ({ stepTrans, step, quizLength }) => {
  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          top: -5,
          right: 40
        }}
      >
        <Fade in={stepTrans} timeout={{ enter: 1000, exit: 0 }}>
          <h2>{step}</h2>
        </Fade>
      </div>
      <div
        style={{
          position: "absolute",
          top: 15,
          right: 30
        }}
      >
        <Fade in={!!step} timeout={1000}>
          <h3>/</h3>
        </Fade>
      </div>
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 20
        }}
      >
        <Fade in={!!step} timeout={1000}>
          <h3>{quizLength}</h3>
        </Fade>
      </div>
    </React.Fragment>
  );
};

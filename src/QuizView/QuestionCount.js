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
          <h1>{step}</h1>
        </Fade>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20
        }}
      >
        <Fade in={!!step} timeout={1000}>
          <h4>/</h4>
        </Fade>
      </div>
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 8
        }}
      >
        <Fade in={!!step} timeout={1000}>
          <h4>{quizLength}</h4>
        </Fade>
      </div>
    </React.Fragment>
  );
};

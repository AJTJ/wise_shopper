import React from "react";

import { MyCard, QuizGrid, BackgroundGrid } from "../styles/layout";
import { Grid, Fade } from "@material-ui/core";
import Menu from "../components/Menu";
// import { Grid, Fade } from "@material-ui/core";

import {
  WiseQuizLinkComponent,
  ShoppingQuizLinkComponent
} from "../components/WiseQuizLink";

const Intro = props => {
  return (
    <BackgroundGrid alpha={0.3}>
      <Menu />
      <QuizGrid styles={{ minWidth: "600px" }}>
        <Fade in={true} timeout={1000}>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <MyCard opacity="0.8" styles={{ minWidth: "600px" }}>
              <h2>
                Brought to you by the{" "}
                <a
                  href="http://www.yukonliteracy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yukon Literacy Coalition
                </a>
              </h2>
              <ShoppingQuizLinkComponent />
              <WiseQuizLinkComponent />
            </MyCard>
          </Grid>
        </Fade>
      </QuizGrid>
    </BackgroundGrid>
  );
};

export default Intro;

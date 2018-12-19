import React from "react";
import WiseSummary from "./WiseSummary";
import ShoppingSummary from "./ShoppingSummary";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

//MUI
import { Grid, Fade } from "@material-ui/core";

//other components
import Menu from "../components/Menu";
import { randomColor } from "../tools/randomColor";

const SummaryView = props => {
  const currentQuizId = props.match.params.currentQuizId;
  return (
    <Grid
      style={{
        backgroundColor: randomColor(),
        transition: "all 1s"
      }}
    >
      <Menu />
      <Fade in={!!currentQuizId} timeout={1000}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            paddingBottom: "200px",
            maxWidth: "500px",
            margin: "0 auto",
            paddingRight: "20px",
            paddingLeft: "20px",
            height: "100vh"
          }}
          direction="column"
        >
          {currentQuizId === "wiseQuiz" && (
            <WiseSummary currentQuizId={currentQuizId} {...props} />
          )}
          {currentQuizId === "shoppingQuiz" && (
            <ShoppingSummary currentQuizId={currentQuizId} {...props} />
          )}
        </Grid>
      </Fade>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    quizData: state.quizReducer.quizData,
    wiseQuizScore: state.scoreReducer.wiseQuizScore
  };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryView);

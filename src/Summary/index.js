import React from "react";
import WiseSummary from "./WiseSummary";
import ShoppingSummary from "./ShoppingSummary";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

//MUI
import { Grid } from "@material-ui/core";

//other components
import Menu from "../components/Menu";

const SummaryView = props => {
  const currentQuizId = props.match.params.currentQuizId;
  return (
    <React.Fragment>
      <Menu />
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100vh", paddingBottom: "200px" }}
        direction="column"
      >
        {currentQuizId === "wiseQuiz" && (
          <WiseSummary currentQuizId={currentQuizId} {...props} />
        )}
        {currentQuizId === "shoppingQuiz" && (
          <ShoppingSummary currentQuizId={currentQuizId} {...props} />
        )}
      </Grid>
    </React.Fragment>
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

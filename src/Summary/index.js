import React from "react";
import WiseSummary from "./WiseSummary";
import ShoppingSummary from "./ShoppingSummary";

import { connect } from "react-redux";
import { actions } from "../redux";
// import { BasicTransition } from "../reactTransitions/transitions";

const SummaryView = props => {
  const { history, resetScore } = props;
  const currentQuizId = props.match.params.currentQuizId;
  return (
    <React.Fragment>
      <p>{`This is the summary of your ${currentQuizId}`}</p>
      {currentQuizId === "wiseQuiz" && (
        <WiseSummary currentQuizId={currentQuizId} {...props} />
      )}
      {currentQuizId === "shoppingQuiz" && (
        <ShoppingSummary currentQuizId={currentQuizId} {...props} />
      )}

      <button
        onClick={() => {
          history.push(`/`);
          resetScore();
        }}
      >
        Focus Yourself
      </button>
      <button
        onClick={() => {
          history.push(`/wiseQuiz/1`);
          resetScore();
        }}
      >
        Wise Quiz
      </button>
      <button
        onClick={() => {
          history.push(`/shoppingQuiz/1`);
          resetScore();
        }}
      >
        Shopping Quiz
      </button>
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

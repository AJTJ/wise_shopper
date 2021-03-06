import React from "react";
import WiseSummary from "./WiseSummary";
import ShoppingSummary from "./ShoppingSummary";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

//MUI and styles
import { QuizGrid, BackgroundGrid } from "../styles/layout";

//other components
import Menu from "../components/Menu";

const SummaryView = props => {
  const currentQuizId = props.match.params.currentQuizId;

  return (
    <BackgroundGrid alpha={0.1}>
      <Menu />
      <QuizGrid>
        {currentQuizId === "wiseQuiz" && (
          <WiseSummary currentQuizId={currentQuizId} {...props} />
        )}
        {currentQuizId === "shoppingQuiz" && (
          <ShoppingSummary currentQuizId={currentQuizId} {...props} />
        )}
      </QuizGrid>
    </BackgroundGrid>
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

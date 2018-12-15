import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { actions } from "../redux";

import { QuestionAnswer } from "./QuestionAnswer";
import { Outcome } from "./Outcome";

const QuizView = props => {
  console.log("quizview props", props);
  const [answerKey, setAnswerKey] = useState(0);
  const [view, setView] = useState("ShoppingQuestion");

  //variables
  let { currentQuizId, step } = props.match.params;
  const stepMinusOne = parseInt(step) - 1;
  const { quizData, addScore } = props;
  let { questionId, answerIds, outcomeIds } = quizData[currentQuizId][
    stepMinusOne
  ];

  useEffect(
    () => {
      if (currentQuizId === "wise_quiz") {
        addScore(`${currentQuizId}_score`, answerIds[answerKey]);
      }
    },
    [answerKey]
  );

  return (
    <div>
      {view === "ShoppingQuestion" && (
        <QuestionAnswer
          view={view}
          questionId={questionId}
          answerIds={answerIds}
          quizData={quizData}
          setView={setView}
          stepMinusOne={stepMinusOne}
          setAnswerKey={setAnswerKey}
          currentQuizId={currentQuizId}
          {...props}
        />
      )}
      {view === "ShoppingOutcome" && (
        <Outcome
          currentQuizId={currentQuizId}
          outcomeId={outcomeIds[answerKey]}
          setView={setView}
          stepMinusOne={stepMinusOne}
          quizData={quizData}
          {...props}
        />
      )}
    </div>
  );
};

QuizView.propTypes = {
  currentQuizId: PropTypes.string,
  step: PropTypes.string,
  quizData: PropTypes.shape({
    quizData: PropTypes.object
  }),
  history: PropTypes.shape({
    action: PropTypes.string
  }),
  questionId: PropTypes.string,
  answerIds: PropTypes.array,
  outcomeIds: PropTypes.array
};

const mapStateToProps = state => {
  console.log(state);
  return {
    quizData: state.quizReducer.quiz_data,
    wiseQuizScore: state.scoreReducer.wise_quiz_score
  };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizView);

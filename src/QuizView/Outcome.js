import React from "react";
import PropTypes from "prop-types";

//MUI
import { Button } from "@material-ui/core";

export const Outcome = props => {
  const {
    quizData,
    outcomeId,
    currentQuizId,
    stepMinusOne,
    history,
    setView
  } = props;

  const outcome = quizData.outcomesById[outcomeId];
  const visualStep = parseInt(stepMinusOne) + 1;

  let nextStep = () => {
    if (visualStep + 1 > quizData[currentQuizId].length) {
      history.push(`/summary/${currentQuizId}/`);
    } else {
      history.push(`/${currentQuizId}/${visualStep + 1}`);
    }
    setView("ShoppingQuestion");
    return;
  };

  return (
    <React.Fragment>
      <h1>{outcome.body}</h1>
      {quizData[currentQuizId][stepMinusOne].tipIds !== undefined &&
        quizData[currentQuizId][stepMinusOne].tipIds.map((tip, key) => (
          <p key={key}>Tip: {quizData.tipsById[tip].body}</p>
        ))}
      <Button
        onClick={() => {
          nextStep();
        }}
      >
        <h2>Next</h2>
      </Button>
    </React.Fragment>
  );
};

Outcome.propTypes = {
  quizData: PropTypes.shape({
    quizData: PropTypes.object
  }),
  outcomeId: PropTypes.string,
  currentQuizId: PropTypes.string,
  stepMinusOne: PropTypes.number,
  history: PropTypes.shape({
    action: PropTypes.string
  }),
  setView: PropTypes.func
};

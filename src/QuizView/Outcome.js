import React from "react";
import PropTypes from "prop-types";

export const Outcome = props => {
  console.log(props);
  const {
    quizData,
    outcomeId,
    currentQuizId,
    stepMinusOne,
    history,
    setView
  } = props;

  const outcome = quizData.outcomes_by_id[outcomeId];
  const visualStep = parseInt(stepMinusOne) + 1;

  let nextStep = () => {
    if (quizData[currentQuizId][stepMinusOne + 1] === undefined) {
      history.push(`/summary/${currentQuizId}/`);
      setView("ShoppingQuestion");
      return;
    } else {
      history.push(`/${currentQuizId}/${visualStep + 1}`);
      setView("ShoppingQuestion");
      return;
    }
  };

  return (
    <div>
      <p>{outcome.body}</p>
      {quizData[currentQuizId][stepMinusOne].tipIds !== undefined &&
        quizData[currentQuizId][stepMinusOne].tipIds.map((tip, key) => (
          <p key={key}>Tip: {quizData.tips_by_id[tip].body}</p>
        ))}
      <button
        onClick={() => {
          nextStep();
        }}
      >
        Next
      </button>
    </div>
  );
};

Outcome.propTypes = {
  quizData: PropTypes.shape({
    quiz_data: PropTypes.object
  }),
  outcomeId: PropTypes.string,
  currentQuizId: PropTypes.string,
  stepMinusOne: PropTypes.number,
  history: PropTypes.shape({
    action: PropTypes.string
  }),
  setView: PropTypes.func
};

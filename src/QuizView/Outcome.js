import React from "react";
import PropTypes from "prop-types";

export const Outcome = props => {
  console.log(props);
  const {
    quiz_data,
    outcomeId,
    currentQuizId,
    stepMinusOne,
    history,
    setView
  } = props;

  const outcome = quiz_data.outcomes_by_id[outcomeId];
  const visualStep = parseInt(stepMinusOne) + 1;

  let nextStep = () => {
    console.log(visualStep + 1, quiz_data[currentQuizId].length);
    if (visualStep + 1 > quiz_data[currentQuizId].length) {
      history.push(`/summary/${currentQuizId}/`);
    } else {
      history.push(`/${currentQuizId}/${visualStep + 1}`);
    }
    setView("ShoppingQuestion");
    return;
  };

  return (
    <div>
      <p>{outcome.body}</p>
      {quiz_data[currentQuizId][stepMinusOne].tipIds !== undefined &&
        quiz_data[currentQuizId][stepMinusOne].tipIds.map((tip, key) => (
          <p key={key}>Tip: {quiz_data.tips_by_id[tip].body}</p>
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
  quiz_data: PropTypes.shape({
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

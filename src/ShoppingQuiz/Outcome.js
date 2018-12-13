import React from "react";

export const Outcome = props => {
  const outcomeIds = props.outcomeIds;
  const quizData = props.quizData;
  const outcomeId = outcomeIds[props.answerKey];

  const outcome = quizData.outcomes_by_id[outcomeId];

  return (
    <div>
      <p>{outcome.body}</p>
      <button
        onClick={() => {
          props.setStep(props.step + 1);
          props.setView("ShoppingQuestion");
        }}
      >
        Next
      </button>
    </div>
  );
};

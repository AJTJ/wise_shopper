import React from "react";

export const Outcome = props => {
  const { quizData, outcomeId, currentQuizId, step, history, setView } = props;

  const outcome = quizData.outcomes_by_id[outcomeId];

  return (
    <div>
      <p>{outcome.body}</p>
      <button
        onClick={() => {
          history.push(`/${currentQuizId}/${step + 1}`);
          setView("ShoppingQuestion");
        }}
      >
        Next
      </button>
    </div>
  );
};

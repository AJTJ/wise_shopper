import React from "react";

export const ShoppingSummary = props => {
  return (
    <div>
      This is the outcome
      <button
        onClick={() => {
          console.log("switching to wise quiz");
          props.setCurrentQuizId(props.quizData.wise_quiz);
          props.setView("ShoppingQuestion");
          //any other resets that need to be done
        }}
      >
        Next!
      </button>
    </div>
  );
};

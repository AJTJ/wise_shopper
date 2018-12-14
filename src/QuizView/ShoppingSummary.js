import React from "react";

export const ShoppingSummary = props => {
  return (
    <div>
      This is the summary of your shopping quiz
      <button
        onClick={() => {
          console.log("switching to wise quiz");
          props.history.push(`/wise_quiz/0`);

          props.setView("ShoppingQuestion");
        }}
      >
        Next!
      </button>
    </div>
  );
};

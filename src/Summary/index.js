import React from "react";

export default props => {
  console.log(props);
  const { history } = props;
  const currentQuizId = props.match.params.currentQuizId;
  return (
    <div>
      <p>{`This is the summary of your ${currentQuizId}`}</p>
      <button
        onClick={() => {
          console.log("switching to focus");
          history.push(`/`);
        }}
      >
        Focus Yourself
      </button>
      <button
        onClick={() => {
          console.log("switching to wise quiz");
          history.push(`/wise_quiz/1`);
        }}
      >
        Wise Quiz
      </button>
      <button
        onClick={() => {
          console.log("switching to shopping quiz");
          history.push(`/shopping_quiz/1`);
        }}
      >
        Shopping Quiz
      </button>
    </div>
  );
};

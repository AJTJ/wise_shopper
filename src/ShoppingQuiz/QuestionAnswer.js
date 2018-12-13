import React from "react";

export const QuestionAnswer = props => {
  const questionId = props.questionId;
  const question = props.quizData.questions_by_id[questionId];
  const setAnswerKey = props.setAnswerKey;
  const currentQuizId = props.currentQuizId;
  const quizData = props.quizData;
  const step = props.step;

  const QuestionDisplay = props => {
    const body = props.body;
    return <p>{body}</p>;
  };

  const AnswerDisplay = props => {
    const body = props.body;
    return (
      <button
        onClick={() => {
          props.setAnswerKey(props.answerKey);
          props.setView("ShoppingOutcome");
        }}
      >
        {body}
      </button>
    );
  };

  return (
    <React.Fragment>
      <QuestionDisplay body={question.body} />
      {quizData[currentQuizId][step].answers.map((current_id, key) => (
        <AnswerDisplay
          setView={props.setView}
          setOutcome={props.setOutcome}
          setAnswerKey={setAnswerKey}
          key={key}
          answerKey={key}
          body={quizData.answers_by_id[current_id].body}
        />
      ))}
    </React.Fragment>
  );
};

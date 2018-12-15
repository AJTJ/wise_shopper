import React from "react";

export const QuestionAnswer = props => {
  const {
    quizData,
    questionId,
    setAnswerKey,
    answerIds,
    setView,
    addScore,
    stepMinusOne
  } = props;
  const question = quizData.questionsById[questionId];

  const QuestionDisplay = props => {
    const body = props.body;
    return <p>{body}</p>;
  };

  const AnswerDisplay = props => {
    const {
      body,
      answerKey,
      setAnswerKey,
      setView,
      currentQuizId,
      stepMinusOne
    } = props;
    return (
      <button
        onClick={() => {
          setAnswerKey(answerKey);
          if (currentQuizId === "wiseQuiz") {
            addScore(`${currentQuizId}Score`, stepMinusOne, answerKey);
          }
          setView("ShoppingOutcome");
        }}
      >
        {body}
      </button>
    );
  };

  return (
    <React.Fragment>
      <QuestionDisplay body={question.body} />
      {answerIds.map((current_id, key) => (
        <AnswerDisplay
          key={key}
          setView={setView}
          setAnswerKey={setAnswerKey}
          answerKey={key}
          stepMinusOne={stepMinusOne}
          body={quizData.answersById[current_id].body}
          {...props}
        />
      ))}
    </React.Fragment>
  );
};

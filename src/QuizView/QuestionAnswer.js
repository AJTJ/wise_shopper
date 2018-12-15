import React from "react";

export const QuestionAnswer = props => {
  const { quiz_data, questionId, setAnswerKey, answerIds, setView } = props;
  const question = quiz_data.questions_by_id[questionId];

  const QuestionDisplay = props => {
    const body = props.body;
    return <p>{body}</p>;
  };

  const AnswerDisplay = props => {
    const { body, answerKey, setAnswerKey, setView } = props;
    return (
      <button
        onClick={() => {
          setAnswerKey(answerKey);
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
          body={quiz_data.answers_by_id[current_id].body}
        />
      ))}
    </React.Fragment>
  );
};

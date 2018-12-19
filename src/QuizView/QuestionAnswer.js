import React from "react";

//MUI
import { Button, Grid } from "@material-ui/core";

export const QuestionAnswer = props => {
  const {
    quizData,
    questionId,
    setAnswerKey,
    answerIds,

    addScore,
    stepMinusOne
  } = props;
  const question = quizData.questionsById[questionId];

  const QuestionDisplay = props => {
    const body = props.body;
    return <h1>{body}</h1>;
  };

  const AnswerDisplay = props => {
    const {
      body,
      answerKey,
      setAnswerKey,
      currentQuizId,
      stepMinusOne
    } = props;
    return (
      <Button
        onClick={() => {
          setAnswerKey(answerKey);
          if (currentQuizId === "wiseQuiz") {
            addScore(`${currentQuizId}Score`, stepMinusOne, answerKey);
          }
          props.history.push(`/${currentQuizId}/${stepMinusOne + 1}/answer`);
        }}
      >
        <h2>{body}</h2>
      </Button>
    );
  };

  return (
    <React.Fragment>
      <QuestionDisplay body={question.body} />

      <Grid>
        {answerIds.map((current_id, key) => (
          <AnswerDisplay
            key={key}
            setAnswerKey={setAnswerKey}
            answerKey={key}
            stepMinusOne={stepMinusOne}
            body={quizData.answersById[current_id].body}
            {...props}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

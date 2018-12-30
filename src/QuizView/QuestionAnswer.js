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
    return (
      <React.Fragment>
        {stepMinusOne === 0 && props.currentQuizId === "shoppingQuiz" && (
          <h3>
            <em>Shopping is challening, consider the following </em>
            <h1 style={{ display: "inline" }}>three questions</h1>
            <em> before making a decision:</em>
          </h3>
        )}
        {stepMinusOne === 0 && props.currentQuizId === "wiseQuiz" && (
          <h3>
            <em>
              The following five questions were created to provide you with some
              tips and tools on how to become a better shopper:
            </em>
          </h3>
        )}
        <h1>{body}</h1>
      </React.Fragment>
    );
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
      <QuestionDisplay body={question.body} {...props} />

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

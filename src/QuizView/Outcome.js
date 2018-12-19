import React from "react";
import PropTypes from "prop-types";

//MUI
import { Button } from "@material-ui/core";

export const Outcome = props => {
  const { quizData, outcomeId, currentQuizId, stepMinusOne, history } = props;

  const outcome = quizData.outcomesById[outcomeId];
  const visualStep = parseInt(stepMinusOne) + 1;

  let nextStep = () => {
    if (visualStep + 1 > quizData[currentQuizId].length) {
      history.push(`/summary/${currentQuizId}/`);
    } else {
      history.push(`/${currentQuizId}/${visualStep + 1}/question`);
    }
    return;
  };

  return (
    <React.Fragment>
      <h1>
        {outcome.body}
        {outcome.link && (
          <React.Fragment>
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red", textDecoration: "none" }}
              href={outcome.link}
            >
              here.
            </a>
          </React.Fragment>
        )}
      </h1>

      {quizData[currentQuizId][stepMinusOne].tipIds !== undefined &&
        quizData[currentQuizId][stepMinusOne].tipIds.map((tip, key) => (
          <h3 key={key}>
            <em>Tip: {quizData.tipsById[tip].body}</em>
          </h3>
        ))}
      <Button
        onClick={() => {
          nextStep();
        }}
      >
        <h2>Next</h2>
      </Button>
    </React.Fragment>
  );
};

Outcome.propTypes = {
  quizData: PropTypes.shape({
    quizData: PropTypes.object
  }),
  outcomeId: PropTypes.string,
  currentQuizId: PropTypes.string,
  stepMinusOne: PropTypes.number,
  history: PropTypes.shape({
    action: PropTypes.string
  }),
  setView: PropTypes.func
};

import React from "react";
import PropTypes from "prop-types";

//MUI
import { Button } from "@material-ui/core";

//Other layout
import { TipCard } from "../styles/layout";

//Images
const smallMilk = require("../resources/small_milk.png");
const bigMilk = require("../resources/big_milk.png");

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
      <React.Fragment>
        {outcome.pre && (
          <h2>
            <em>{outcome.pre}</em>
          </h2>
        )}
        <h1>
          {outcome.body}
          {outcome.link && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "red", textDecoration: "none" }}
              href={outcome.link}
            >
              here.
            </a>
          )}
        </h1>
      </React.Fragment>

      {quizData[currentQuizId][stepMinusOne].tipIds !== undefined && (
        <TipCard>
          {quizData[currentQuizId][stepMinusOne].tipIds.map((tip, key) => {
            const curTip = quizData.tipsById[tip];
            return (
              <h3 style={{ fontWeight: 200 }} key={key}>
                <p>Tip: {curTip.body}</p>
                {curTip.math && <p>{curTip.math}</p>}
                {curTip.exampleTitle && (
                  <p style={{ fontWeight: 400 }}>{curTip.exampleTitle}</p>
                )}
                {curTip.example1 && (
                  <React.Fragment>
                    <p>{curTip.example1}</p>
                    <p>{curTip.example1_b}</p>
                    <img src={smallMilk} alt="" />
                    <p style={{ fontSize: "10px", color: "grey" }}>Milk "A"</p>
                  </React.Fragment>
                )}
                {curTip.example2 && (
                  <React.Fragment>
                    <p>{curTip.example2}</p>
                    <p>{curTip.example2_b}</p>
                    <img src={bigMilk} alt="" />
                    <p style={{ fontSize: "10px", color: "grey" }}>Milk "B"</p>
                  </React.Fragment>
                )}
                {curTip.exampleSummary && <p>{curTip.exampleSummary}</p>}
              </h3>
            );
          })}
        </TipCard>
      )}
      <div style={{ paddingTop: "5px" }}>
        <Button
          onClick={() => {
            props.setStepTrans(false);
            nextStep();
          }}
        >
          <h2>Next</h2>
        </Button>
      </div>
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

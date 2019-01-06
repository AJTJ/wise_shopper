import React, { useEffect, useState } from "react";

import { Fade } from "@material-ui/core";

//MUI
import { Grid } from "@material-ui/core";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

//Layout
import { TipCard, MyCard } from "../styles/layout";

//Images
const smallMilk = require("../resources/small_milk.png");
const bigMilk = require("../resources/big_milk.png");

const WiseSummary = props => {
  const [mounted, setMounted] = useState(false);
  const { quizData, currentQuizId, wiseQuizScore } = props;
  const tips = props.quizData.tipsById;

  const quizLength = quizData[currentQuizId].length;
  const scoreValues = Object.values(wiseQuizScore).length;
  let finalScore = [
    { answerBody: "Yes", count: 0 },
    { answerBody: "Sometimes", count: 0 },
    { answerBody: "No", count: 0 }
  ];
  let yes = undefined;
  let sometimes = undefined;
  let no = undefined;

  useEffect(() => {
    setMounted(true);
  }, []);

  const score = () => {
    const allQuestions = quizData[currentQuizId];
    const scoreEntries = Object.entries(wiseQuizScore);

    for (let index = 0; index < scoreEntries.length; index++) {
      let questionIndex = scoreEntries[index][0];
      let answerIndex = scoreEntries[index][1];
      let answer = allQuestions[questionIndex].answerIds[answerIndex];
      let answerBody = quizData.answersById[answer].body;

      let known = finalScore.findIndex(c => c.answerBody === answerBody);
      if (known === -1) {
        finalScore.push({ answerBody, count: 1 });
      } else {
        finalScore[known].count++;
      }
    }
    yes = finalScore[0].count;
    sometimes = finalScore[1].count;
    no = finalScore[2].count;
    return finalScore;
  };
  return (
    <Fade in={mounted} timeout={1000}>
      <MyCard>
        {scoreValues !== quizLength ? (
          <h1>You didn't answer all the questions, start at the beginning!</h1>
        ) : (
          <div>
            <h1>You answered:</h1>
            <div
              style={{
                borderRadius: "5px",
                padding: "10px",
                border: "1px solid lightgrey"
              }}
            >
              {score().map((score, key) => {
                return (
                  <em key={key}>
                    <h1>
                      {score.answerBody}: {score.count}{" "}
                      {score.count === 1 ? "time" : "times"}
                    </h1>
                  </em>
                );
              })}
            </div>
            {yes >= 3 ? (
              <React.Fragment>
                <h2>
                  You make the most of your shopping dollar but remember there’s
                  always room to learn more!
                </h2>
                <TipCard>
                  <p>
                    Tip: Advertisers are always looking for new ways to sell you
                    products.
                  </p>
                </TipCard>
              </React.Fragment>
            ) : (yes <= 2 && sometimes >= 2 && no <= 2) ||
              (yes === 2 && no === 2) ? (
              <h2>
                You are a good shopper but paying a bit more attention to how
                you spend your money will help you save more!
              </h2>
            ) : (
              <React.Fragment>
                <h2>
                  You’ve taken the first step to becoming a wise shopper by
                  completing this quiz! Step two: follow these tips!
                </h2>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="column"
                >
                  <div style={{ fontWeight: 200 }}>
                    <TipCard>
                      <h3 style={{ fontWeight: 200, paddingBottom: "10px" }}>
                        <p>Tip: {tips.talkToPeople.body}</p>
                      </h3>
                      <h3 style={{ fontWeight: 200, paddingBottom: "10px" }}>
                        <p>Tip: {tips.groceryPhone.body}</p>
                      </h3>
                      <h3 style={{ fontWeight: 200, paddingBottom: "10px" }}>
                        <p>Tip: {tips.lookForSales.body}</p>
                      </h3>
                      <h3 style={{ fontWeight: 200, paddingBottom: "10px" }}>
                        <p>Tip: {tips.keepReceipts.body}</p>
                      </h3>

                      <div
                        style={{
                          borderRadius: "5px",
                          padding: "10px",
                          border: "1px solid lightgrey"
                        }}
                      >
                        <h3 style={{ fontWeight: 200 }}>
                          <p>Tip: {tips.unitMath.body}</p>
                        </h3>
                        <p>{tips.unitMath.math}</p>
                        <p style={{ fontWeight: 400 }}>
                          {tips.unitMath.exampleTitle}
                        </p>
                        <p>{tips.unitMath.example1}</p>
                        <div>
                          <img src={smallMilk} alt="" />
                        </div>
                        <p style={{ fontSize: "10px", color: "grey" }}>
                          Milk "A"
                        </p>
                        <p>{tips.unitMath.example2}</p>
                        <div>
                          <img src={bigMilk} alt="" />
                        </div>
                        <p style={{ fontSize: "10px", color: "grey" }}>
                          Milk "B"
                        </p>
                        <p>{tips.unitMath.exampleSummary}</p>
                      </div>
                    </TipCard>
                  </div>
                </Grid>
              </React.Fragment>
            )}
          </div>
        )}
      </MyCard>
    </Fade>
  );
};

const mapStateToProps = state => {
  return {
    quizData: state.quizReducer.quizData,
    wiseQuizScore: state.scoreReducer.wiseQuizScore
  };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WiseSummary);

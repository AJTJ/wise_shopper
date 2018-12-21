import React, { useEffect, useState } from "react";

import { Fade } from "@material-ui/core";

export default props => {
  const [mounted, setMounted] = useState(false);
  const { quizData, currentQuizId, wiseQuizScore } = props;

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
    // console.log(finalScore);
    yes = finalScore[0].count;
    sometimes = finalScore[1].count;
    no = finalScore[2].count;
    return finalScore;
  };
  return (
    <Fade in={mounted} timeout={1000}>
      <div>
        {scoreValues !== quizLength ? (
          <h1>You didn't answer all the questions, start at the beginning!</h1>
        ) : (
          <div>
            <h1>You answered:</h1>
            {score().map((score, key) => {
              // console.log("ff", finalScore, yes, sometimes, no);
              return (
                <h4 key={key}>
                  {score.answerBody}: {score.count}{" "}
                  {score.count === 1 ? "time" : "times"}
                </h4>
              );
            })}
            {yes >= 3 ? (
              <h2>
                You make the most of your shopping dollar but remember there’s
                always room to learn more!
              </h2>
            ) : (yes <= 2 && sometimes >= 2 && no <= 2) ||
              (yes === 2 && no === 2) ? (
              <h2>
                You are a good shopper but paying a bit more attention to how
                you spend your money may help you save more!
              </h2>
            ) : (
              <h2>
                You’ve taken the first step to becoming a wise shopper by
                completing this quiz!
              </h2>
            )}
          </div>
        )}
      </div>
    </Fade>
  );
};

import React from "react";

export default props => {
  const { quizData, currentQuizId, wiseQuizScore } = props;

  const quizLength = quizData[currentQuizId].length;
  const scoreValues = Object.values(wiseQuizScore).length;

  const score = () => {
    const allQuestions = quizData[currentQuizId];
    const scoreEntries = Object.entries(wiseQuizScore);
    let finalScore = [];

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
    return finalScore;
  };

  return (
    <div>
      {scoreValues !== quizLength ? (
        <h1>You didn't answer all the questions, start at the beginning!</h1>
      ) : (
        <div>
          <h1>You answered</h1>
          {score().map((score, key) => {
            return (
              <h2 key={key}>
                {score.answerBody}: {score.count} times
              </h2>
            );
          })}
        </div>
      )}
    </div>
  );
};

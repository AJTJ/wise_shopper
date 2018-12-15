import * as constants from "./constants";

const addScore = (quiz, question, answer = 1) => ({
  type: constants.addScore,
  quiz: quiz,
  question: question,
  answer: answer
});

const resetScore = () => ({
  type: constants.resetScore
});

export default {
  addScore,
  resetScore
};

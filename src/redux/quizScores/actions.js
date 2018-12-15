import * as constants from "./constants";

const addScore = (quiz, answer, count = 1) => ({
  type: constants.addScore,
  quiz: quiz,
  answer: answer,
  count: count
});

const resetScore = () => ({
  type: constants.resetScore
});

export default {
  addScore,
  resetScore
};

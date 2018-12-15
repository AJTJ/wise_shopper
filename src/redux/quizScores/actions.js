import * as constants from "./constants";

const addScore = (chart, count = 1) => ({
  type: constants.addScore,
  chart: chart,
  count: count
});

export default {
  addScore
};

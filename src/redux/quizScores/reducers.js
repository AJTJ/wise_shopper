import * as constants from "./constants";

const defaultState = {
  wise_quiz_score: {
    yes_answer: 0,
    sometimes_answer: 0,
    no_answer: 0
  }
};

const scoreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.addScore:
      console.log("the action", action);
      const { quiz, answer, count } = action;
      const currentScore = state[quiz][answer];
      return {
        ...state,
        [quiz]: {
          ...state[quiz],
          [answer]: currentScore + count
        }
      };
    case constants.resetScore:
      return {
        ...state,
        ...defaultState
      };
    default:
      return state;
  }
};

export default { scoreReducer };

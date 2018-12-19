import * as constants from "./constants";

const defaultState = {
  wiseQuizScore: {}
};

const scoreReducer = (state = defaultState, action) => {
  console.log(state.wiseQuizScore);
  switch (action.type) {
    case constants.addScore:
      const { quiz, question, answer } = action;
      return {
        ...state,
        [quiz]: {
          ...state[quiz],
          [question]: answer
        }
      };
    case constants.resetScore:
      console.log("reset!");
      return {
        ...state,
        ...defaultState
      };
    default:
      return state;
  }
};

export default { scoreReducer };

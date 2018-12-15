import * as constants from "./constants";

const defaultState = {
  wiseQuizScore: { 0: 0, 1: 1, 2: 2, 3: 0, 4: 0 }
};

const scoreReducer = (state = defaultState, action) => {
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
      return {
        ...state,
        ...defaultState
      };
    default:
      return state;
  }
};

export default { scoreReducer };

import * as constants from "./constants";

// wiseQuizScore: { 0: 2, 1: 2, 2: 2, 3: 2, 4: 2 }

const defaultState = {
  wiseQuizScore: {}
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

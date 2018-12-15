import { combineReducers } from "redux";
import * as quizData from "./quizData";
import * as quizScores from "./quizScores";

const allReducers = {
  ...quizData.reducer,
  ...quizScores.reducer
};

const actions = {
  ...quizData.actions,
  ...quizScores.actions
};

const reducers = combineReducers(allReducers);

export { reducers, actions };

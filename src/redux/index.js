import { combineReducers } from "redux";
import * as quiz from "./quiz/index";

const allReducers = {
  ...quiz.reducer
};

const actions = {
  ...quiz.actions
};

const reducers = combineReducers(allReducers);

export { reducers, actions };

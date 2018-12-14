import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import FocusYourself from "./FocusYourself";
import QuizView from "./QuizView";
import WiseShopper from "./WiseShopper";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={FocusYourself} />
    <Route path="/:currentQuizId/:step/" component={QuizView} />
    <Route path="/WiseShopper" component={WiseShopper} />
    <Redirect to="/" />
  </Switch>
);

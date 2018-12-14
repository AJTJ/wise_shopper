import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import FocusYourself from "./FocusYourself";
import QuizView from "./QuizView";
import Summary from "./Summary";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={FocusYourself} />
    <Route exact path="/summary/:currentQuizId/" component={Summary} />
    <Route path="/:currentQuizId/:step/" component={QuizView} />
    <Redirect to="/" />
  </Switch>
);

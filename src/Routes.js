import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import FocusYourself from "./FocusYourself";
import QuizView from "./QuizView";
import Summary from "./Summary";
import Intro from "./Intro";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={FocusYourself} />
    <Route exact path="/introduction" component={Intro} />
    <Route exact path="/summary/:currentQuizId/" component={Summary} />
    <Route path="/:currentQuizId/:step/:view" component={QuizView} />
    <Redirect to="/" />
  </Switch>
);

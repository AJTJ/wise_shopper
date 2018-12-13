import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import FocusYourself from "./FocusYourself";
import ShoppingQuiz from "./ShoppingQuiz";
import WiseShopper from "./WiseShopper";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={FocusYourself} />
    <Route path="/ShoppingQuiz" component={ShoppingQuiz} />
    <Route path="/WiseShopper" component={WiseShopper} />
    <Redirect to="/" />
  </Switch>
);

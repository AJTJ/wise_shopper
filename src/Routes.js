import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { FocusYourself } from "./Views/FocusYourself";
import ShoppingQuiz from "./Views/ShoppingQuiz";
import { WiseShopper } from "./Views/WiseShopper";

export const Routes = () => (
  <Switch>
    <Route path="/FocusYourself" component={FocusYourself} />
    <Route path="/ShoppingQuiz" component={ShoppingQuiz} />
    <Route path="/WiseShopper" component={WiseShopper} />
    <Redirect to="/FocusYourself" />
  </Switch>
);

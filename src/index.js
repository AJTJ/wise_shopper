import React from "react";
import ReactDOM from "react-dom";

import "animate.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./styles/global.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./store";

// "http://aaronjanke.com/ylcQuizzes",

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
    // fontFamily: ["Inconsolata"].join(",")
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/ylcQuizzes">
      <MuiThemeProvider theme={theme}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

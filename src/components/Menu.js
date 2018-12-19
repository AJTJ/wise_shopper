import React from "react";

import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

import { AppBar, Button, Toolbar, Grid, Avatar } from "@material-ui/core";

const Menu = props => {
  const { resetScore } = props;
  const introLink = props => {
    return <Link to="/bleh" {...props} />;
  };
  const shoppingLink = props => {
    return <Link to="/shoppingQuiz/1" {...props} />;
  };
  const wiseLink = props => {
    return <Link to="/wiseQuiz/1" {...props} />;
  };
  return (
    <AppBar style={props.style} position="static" color="default">
      <Grid container justify="center">
        <Toolbar>
          <a
            href="https://www.yukonliteracy.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Avatar
              src={require("../resources/dark_flake.png")}
              style={{ margin: "10px" }}
            />
          </a>
          <Button component={introLink}>The Intro</Button>
          <Button onClick={() => resetScore()} component={shoppingLink}>
            Shopping Quiz
          </Button>
          <Button onClick={() => resetScore()} component={wiseLink}>
            Wise Consumer Quiz
          </Button>
          <a
            href="https://www.yukonliteracy.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button>The YLC Website</Button>
          </a>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

const mapStateToProps = state => {
  return {
    quizData: state.quizReducer.quizData,
    wiseQuizScore: state.scoreReducer.wiseQuizScore
  };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

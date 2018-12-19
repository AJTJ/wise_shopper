import React from "react";

import { Link } from "react-router-dom";

import { AppBar, Button, Toolbar, Grid, Avatar } from "@material-ui/core";

const Menu = props => {
  const introLink = props => <Link to="/bleh" {...props} />;
  const shoppingLink = props => <Link to="/shoppingQuiz/1" {...props} />;
  const wiseLink = props => <Link to="/wiseQuiz/1" {...props} />;
  return (
    <AppBar {...props} position="static" color="default">
      <Grid container justify="center">
        <Toolbar>
          <Avatar
            src={require("../resources/dark_flake.png")}
            style={{ margin: "10px" }}
          />
          <Button component={introLink}>The Intro</Button>
          <Button component={shoppingLink}>Shopping Quiz</Button>
          <Button component={wiseLink}>Wise Consumer Quiz</Button>
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

export default React.memo(Menu);

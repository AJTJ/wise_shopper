import React, { useState } from "react";

import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { actions } from "../redux";

import toRenderProps from "recompose/toRenderProps";

import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  Avatar,
  withWidth,
  Menu,
  MenuItem
  // IconButton,
  // MenuItem
} from "@material-ui/core";

const WithWidth = toRenderProps(withWidth());

const MyMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const AnchorButton = Button;
  const { resetScore } = props;
  const introLink = props => {
    return <Link to="/bleh" {...props} />;
  };
  const shoppingLink = props => {
    return <Link to="/shoppingQuiz/1/question" {...props} />;
  };
  const wiseLink = props => {
    return <Link to="/wiseQuiz/1/question" {...props} />;
  };

  const handleClick = event => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const MenuContents = () => {
  //   return (
  //     <React.Fragment>
  //       <Button component={introLink}>The Intro</Button>
  //       <Button onClick={() => resetScore()} component={shoppingLink}>
  //         Shopping Quiz
  //       </Button>
  //       <Button onClick={() => resetScore()} component={wiseLink}>
  //         Wise Consumer Quiz
  //       </Button>
  //       <a
  //         href="https://www.yukonliteracy.com/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={{ color: "inherit", textDecoration: "none" }}
  //       >
  //         <Button>The YLC Website</Button>
  //       </a>
  //     </React.Fragment>
  //   );
  // };

  const Logo = () => (
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
  );

  return (
    <AppBar style={props.style} position="static" color="default">
      <WithWidth>
        {({ width }) => (
          <Grid container justify="center" style={{ width: "100%" }}>
            <Toolbar style={{ width: "100%" }}>
              {width === "sm" || width === "xs" ? (
                <Grid
                  container
                  justify="space-between"
                  style={{ width: "100%" }}
                >
                  <Logo />
                  <AnchorButton
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={e => handleClick(e)}
                  >
                    <Avatar
                      src={require("../resources/baseline-menu-24px.svg")}
                    />
                  </AnchorButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose()}
                  >
                    <MenuItem
                      onClick={() => setAnchorEl(false)}
                      component={introLink}
                    >
                      The Intro
                    </MenuItem>
                    <MenuItem
                      component={shoppingLink}
                      onClick={() => {
                        setAnchorEl(false);
                        resetScore();
                      }}
                    >
                      Shopping Quiz
                    </MenuItem>
                    <MenuItem
                      component={wiseLink}
                      onClick={() => {
                        setAnchorEl(false);
                        resetScore();
                      }}
                    >
                      Wise Consumer Quiz
                    </MenuItem>
                    <a
                      href="https://www.yukonliteracy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <MenuItem onClick={() => setAnchorEl(false)}>
                        The YLC Website
                      </MenuItem>
                    </a>
                  </Menu>
                </Grid>
              ) : (
                <Grid container justify="center">
                  <Logo />
                  <Button component={introLink}>The Intro</Button>
                  <Button onClick={() => resetScore()} component={shoppingLink}>
                    Shopping Quiz
                  </Button>
                  <Button onClick={() => resetScore()} component={wiseLink}>
                    Wise Consumer Quiz
                  </Button>
                  <Button>
                    <a
                      href="https://www.yukonliteracy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      The YLC Website
                    </a>
                  </Button>
                </Grid>
              )}
            </Toolbar>
          </Grid>
        )}
      </WithWidth>
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
)(MyMenu);

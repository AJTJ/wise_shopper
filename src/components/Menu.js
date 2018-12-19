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
  IconButton,
  MenuItem
} from "@material-ui/core";

const Menu = props => {
  // const [anchorEl, setAnchorEl] = useState(null);

  const WithWidth = toRenderProps(withWidth());
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

  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const MenuContents = props => {
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

  return (
    <AppBar style={props.style} position="static" color="default">
      <WithWidth>
        {({ width }) => (
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

              {width === "sm" ? (
                <React.Fragment>
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
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p>it's big</p>
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
                </React.Fragment>
                // <React.Fragment>
                //   <Button>
                //     <Avatar
                //       src={require("../resources/baseline-menu-24px.svg")}
                //       style={{ margin: "10px" }}
                //     />
                //   </Button>

                //   <Menu open={true}>
                //     <MenuItem>an item</MenuItem>
                //   </Menu>
                // </React.Fragment>
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
)(Menu);

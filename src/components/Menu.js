import React from "react";
import { AppBar, Button, Toolbar, Grid, Avatar } from "@material-ui/core";

export default props => {
  return (
    <AppBar {...props} position="static" color="default">
      <Grid container justify="center">
        <Toolbar>
          {/* <img src="../resources/dark_flake.png" alt="" /> */}
          <Avatar
            src={require("../resources/dark_flake.png")}
            style={{ margin: "10px" }}
          />
          <Button>The Intro</Button>
          <Button>Shopping Quiz</Button>
          <Button>Wise Consumer Quiz</Button>
          <Button>The YLC Website</Button>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

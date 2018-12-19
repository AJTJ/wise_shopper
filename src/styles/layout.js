import React from "react";
import { Grid as MGrid } from "@material-ui/core";

export const Grid = props => {
  return <MGrid {...props}>{props.children}</MGrid>;
};

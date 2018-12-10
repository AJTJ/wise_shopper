import React, { useState } from "react";

import { connect } from "react-redux";

import { actions } from "../redux";

console.log(actions);

const ShoppingQuiz = props => {
  const [question, setQuestion] = useState("need");
  return <div>Here we go</div>;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingQuiz);

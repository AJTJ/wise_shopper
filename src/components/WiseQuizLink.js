import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

const LinkButton = ({ target, buttonCopy }) => (
  <div style={{ paddingBottom: "5px" }}>
    <Link
      style={{
        color: "inherit",
        textDecoration: "none",
        fontWeight: "700"
      }}
      to={target}
    >
      <Button>{buttonCopy}</Button>
    </Link>
  </div>
);

const WiseQuizContent = () => (
  <>
    <h2 style={{ margin: 0 }}>Are you a wise consumer? </h2>
    <h3 style={{ fontWeight: 500, paddingRight: "30px", paddingLeft: "30px" }}>
      Take the wise consumer quiz to test your shopping habits and maybe learn
      some new ones.
    </h3>
    <LinkButton
      target={"/wiseQuiz/1/question"}
      buttonCopy={"Take the Wise Consumer Quiz"}
    />
  </>
);

const ShoppingQuizContent = () => (
  <>
    <h2 style={{ margin: 0 }}>Making a purchase right now?</h2>
    <h3 style={{ fontWeight: 500, paddingRight: "30px", paddingLeft: "30px" }}>
      Take the shopping quiz if you're considering a new purchase right now.
    </h3>
    <LinkButton
      target={"/shoppingQuiz/1/question"}
      buttonCopy={"Take the Shopping Quiz"}
    />
  </>
);

const Body = props => (
  <div
    style={{
      borderRadius: "5px",
      padding: "10px",
      border: "1px solid black",
      display: "inline-block",
      background: "white",
      width: "500px",
      marginBottom: "10px"
    }}
  >
    {props.children}
  </div>
);

export const WiseQuizLinkComponent = () => (
  <Body>
    <WiseQuizContent />
  </Body>
);

export const ShoppingQuizLinkComponent = () => (
  <Body>
    <ShoppingQuizContent />
  </Body>
);

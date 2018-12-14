import React from "react";
import { Link } from "react-router-dom";

const FocusYourself = () => {
  return (
    <div>
      <p>Welcome</p>
      <p>Time to focus...</p>
      <Link to="/shopping_quiz/1">Go to Shopping Quiz</Link>
    </div>
  );
};

export default FocusYourself;

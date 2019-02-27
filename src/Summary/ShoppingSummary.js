import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Fade, Button } from "@material-ui/core";

export default props => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Fade in={mounted} timeout={1000}>
      <div>
        <h1>In conclusion:</h1>
        <h2>
          If you did not answer "Yes" to all of those questions, it is not worth
          purchasing <em>right now</em>.
        </h2>
        <h2>If you did... then go for it!</h2>

        <div
          style={{
            borderRadius: "5px",
            padding: "10px",
            border: "1px solid black",
            display: "inline-block",
            background: "white"
          }}
        >
          <h2 style={{ margin: 0 }}>Are you a wise consumer? </h2>
          <div style={{ paddingBottom: "5px" }}>
            <Link
              style={{
                color: "inherit",
                textDecoration: "none"
              }}
              to="/wiseQuiz/1/question"
            >
              <Button>Take the Wise Consumer Quiz </Button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

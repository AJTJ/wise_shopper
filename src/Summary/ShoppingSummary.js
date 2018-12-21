import React, { useState, useEffect } from "react";

import { Fade } from "@material-ui/core";

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
      </div>
    </Fade>
  );
};

import React from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

export const BasicTransition = props => {
  return (
    <TransitionGroup enter exit appear component={null}>
      <CSSTransition
        classNames={{
          appear: "animated bounceIn",
          enterActive: "animated fadeIn",
          exitActive: "animated fadeOut"
        }}
        timeout={500}
      >
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
};

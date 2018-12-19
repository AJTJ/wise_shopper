// import React from "react";

export const randomColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgba(" + x + "," + y + "," + z + ", 0.1)";
  return bgColor;
};

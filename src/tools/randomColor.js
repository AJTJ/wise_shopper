// import React from "react";

export const randomColor = opacity => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgba(" + x + "," + y + "," + z + "," + opacity + ")";
  return bgColor;
};

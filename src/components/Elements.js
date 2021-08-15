import React from "react";
import "../styles/elements.scss";
import Pixels from "./Pixels";

export default function Elements(props) {
  const { width, userColor } = props;
  let pixelArray = [];

  for (let i = 0; i < width; i++) {
    pixelArray.push(<Pixels key={i} userColor={userColor} />);
  }

  return <div className='elements'>{pixelArray}</div>;
}

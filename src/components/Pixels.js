import React, { useState } from "react";
import "../styles/pixels.scss";

export default function Pixels(props) {
  const { userColor } = props;
  const [pixelColor, setPixelColor] = useState("#fff");
  const [prevColor, setPrevColor] = useState(pixelColor);
  const [replaceColor, setReplaceColor] = useState(true);

  function previewColor() {
    setPrevColor(pixelColor);
    setPixelColor(userColor);
  }

  function returnColor() {
    if (replaceColor) {
      setPixelColor(prevColor);
    } else {
      setReplaceColor(true);
    }
  }

  function addColor() {
    setPixelColor(userColor);
    setReplaceColor(false);
  }

  return (
    <div
      className='pixels'
      onClick={addColor}
      onMouseEnter={previewColor}
      onMouseLeave={returnColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}

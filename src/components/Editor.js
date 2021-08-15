import React, { useState } from "react";
import "../styles/editor.scss";
import Canvas from "./Canvas";
import { SwatchesPicker } from "react-color";

export default function Editor() {
  const [canvasWidth, setCanvasWidth] = useState(16);
  const [canvasHeight, setCanvasHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideCanvas, setHideCanvas] = useState(true);
  const [buttonText, setButtonText] = useState("start pixel art");
  const [userColor, setColor] = useState("#b71c1c");

  function openCanvas() {
    setHideCanvas(!hideCanvas);
    setHideOptions(!hideOptions);

    buttonText === "start pixel art"
      ? setButtonText("reset")
      : setButtonText("start pixel art");
  }
  function newColor(props) {
    setColor(props.hex);
  }
  return (
    <div id='editor'>
      <h1>Pixel Art</h1>
      {hideCanvas && <h2>Enter Canvas Dimentions</h2>}
      {hideCanvas && (
        <div id='inputs'>
          <div className='input'>
            <input
              type='number'
              className='canvasBox'
              defaultValue={canvasWidth}
              onChange={(event) => {
                setCanvasWidth(event.target.value);
              }}
            />
            <span>Height</span>
          </div>
          <div className='input'>
            <input
              type='number'
              className='canvasBox'
              defaultValue={canvasHeight}
              onChange={(event) => {
                setCanvasHeight(event.target.value);
              }}
            />
            <span>Width</span>
          </div>
        </div>
      )}

      <button className='button' onClick={openCanvas}>
        {buttonText}
      </button>
      {hideOptions && (
        <SwatchesPicker
          color={userColor}
          onChangeComplete={newColor}
        ></SwatchesPicker>
      )}
      {hideOptions && (
        <Canvas
          width={canvasWidth}
          height={canvasHeight}
          userColor={userColor}
        />
      )}
    </div>
  );
}

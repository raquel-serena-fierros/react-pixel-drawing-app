import "../styles/canvas.scss";
import Elements from "./Elements";
import { exportComponentAsPNG } from "react-component-export-image";
import React, { useRef } from "react";

export default function Canvas(props) {
  let elementArray = [];
  const canvasRef = useRef();
  const { height, width, userColor } = props;

  for (let i = 0; i < height; i++) {
    elementArray.push(
      <Elements key={i} height={height} width={width} userColor={userColor} />
    );
  }

  return (
    <div id='canvas'>
      <div id='pixels' ref={canvasRef}>
        {elementArray}
      </div>
      <button
        onClick={() => exportComponentAsPNG(canvasRef)}
        className='button'
      >
        Save Pixel Art Work
      </button>
    </div>
  );
}

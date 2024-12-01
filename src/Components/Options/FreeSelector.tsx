import React, { MouseEventHandler } from "react";
import { Color } from "../../Interfaces/Color";
import "./FreeSelector.css";
interface FreeSelectorProps {
  parsedColor: Color;
  satCoords: Array<number>;
  hueCoords: number;
  onSaturationChange: MouseEventHandler;
  onHueChange: MouseEventHandler;
}
export const FreeSelector = (props: FreeSelectorProps) => {
  const {
    parsedColor,
    satCoords,
    hueCoords,
    onSaturationChange,
    onHueChange
  } = props;
  return (
    <div className="cp-free-root">
      <div
        className="cp-saturation"
        style={{
          backgroundColor: `hsl(${parsedColor.hsv.h}, 100%, 50%)`
        }}
        onClick={onSaturationChange}
      >
        <div
          className="cp-saturation-indicator"
          style={{
            backgroundColor: parsedColor.hex,
            left: (satCoords?.[0] ?? 0) + "%",
            top: (satCoords?.[1] ?? 0) + "%"
          }}
        />
      </div>
      <div className="cp-hue" onClick={onHueChange}>
        <div
          className="cp-hue-indicator"
          style={{
            backgroundColor: parsedColor.hex,
            left: (hueCoords ?? 0) + "%"
          }}
        />
      </div>
    </div>
  );
};
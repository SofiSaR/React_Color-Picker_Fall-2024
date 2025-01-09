import React from "react";
import { Color } from "../../Interfaces/Color";
import "./PredefinedSelector.css";
interface PredefinedSelectorProps {
  parsedColor: Color;
  colors: Array<string>;
  onSelect(color: string): void;
}
export const PredefinedSelector = (props: PredefinedSelectorProps) => {
  const { parsedColor, colors, onSelect } = props;
  return (
    <div
      className="cp-predefined-root">
      {colors.map((color) => (
        <button
          className="cp-color-button"
          key={color}
          onClick={(event) => onSelect(color)}
          style={{
            border: color === parsedColor?.hex ? "1px solid #000000" : "none"
          }}
        >
          <div
            className="cp-preview-color"
            style={{
              background: color
            }}
          />
        </button>
      ))}
    </div>
  );
};
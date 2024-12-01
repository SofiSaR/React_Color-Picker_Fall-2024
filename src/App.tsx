import "./styles.css";
import { useCallback, useState } from "react";
import { ColorPicker, ColorPickerVariant } from "./Components/index.ts";
import React from "react";

export default function App() {
  const [color, setColor] = useState("#ffffff");

  const handleChange = useCallback((color) => {
    setColor(color);
  }, []);

  return (
    <div>
        <ColorPicker
            color={color}
            onChange={handleChange}
            variant={ColorPickerVariant.Predefined}
        />

        <ColorPicker
            color={color}
            onChange={handleChange}
            variant={ColorPickerVariant.Free}
        />
    </div>
  );
}

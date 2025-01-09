import "./styles.css";
import './fonts.css';
import { useCallback, useState } from "react";
import { ColorPicker, ColorPickerVariant } from "./Components/index.ts";
import React from "react";

export default function App() {
  const [color, setColor] = useState("#ffffff");

  const handleChange = useCallback((color) => {
    setColor(color);
  }, []);

  return (
    <div style={{display: 'grid', position: 'absolute', width: '100%', height: '100%', backgroundImage: "url('./res/paint-picker-background.webp')", backgroundAttachment: 'fixed', backgroundSize: 'cover', gridTemplateColumns: '11fr 1fr'}}>
        <div style={{position: 'relative', overflow: 'scroll', scrollbarWidth: 'none'}}>
            <div style={{position: 'relative', justifySelf: 'center', justifyItems: 'center', backgroundColor: '#FFFFFFF2', width: '887px', marginTop: '50px', marginBottom: '75px', borderRadius: '25px', paddingTop: '50px', paddingBottom: '70px'}}>
                <ColorPicker
                    color={color}
                    onChange={handleChange}
                    variant={ColorPickerVariant.Free}
                />
            </div>
        </div>
        <div style={{justifyItems: 'center', position: 'relative', overflow: 'scroll', scrollbarWidth: 'none', backgroundColor: '#FFFFFFE6'}}>
            <ColorPicker
                color={color}
                onChange={handleChange}
                variant={ColorPickerVariant.Predefined}
            />
        </div>
    </div>
  );
}

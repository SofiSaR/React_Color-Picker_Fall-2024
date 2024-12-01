// ColorUtils.ts
import { Color, ColorRGB } from "../Interfaces/Color";
import { hexToRgb, rgbToHex, rgbToHsv } from "./Converters.ts";
export function getRgb(color: string): ColorRGB {
  const matches = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/i.exec(color);
  const r = Number(matches?.[1] ?? 0);
  const g = Number(matches?.[2] ?? 0);
  const b = Number(matches?.[3] ?? 0);
  return {
    r,
    g,
    b
  };
}
export function parseColor(color: string): Color {
  var hex = "";
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var hsv = {
    h: 0,
    s: 0,
    v: 0
  };
  if (color.slice(0, 1) === "#") {
    hex = color;
    rgb = hexToRgb(hex);
    hsv = rgbToHsv(rgb);
  } else if (color.slice(0, 3) === "rgb") {
    rgb = getRgb(color);
    hex = rgbToHex(rgb);
    hsv = rgbToHsv(rgb);
  }
  return {
    hex,
    rgb,
    hsv
  };
}
export function getSaturationCoordinates(color: Color): [number, number] {
  const { s, v } = rgbToHsv(color.rgb);
  const x = s;
  const y = 100 - v;
  return [x, y];
}
export function getHueCoordinates(color: Color): number {
  const { h } = color.hsv;
  const x = (h / 360) * 100;
  return x;
}
export function clamp(number: number, min: number, max: number): number {
  if (!max) {
    return Math.max(number, min) === min ? number : min;
  } else if (Math.min(number, min) === number) {
    return min;
  } else if (Math.max(number, max) === number) {
    return max;
  }
  return number;
}
// Color.ts
export interface Color {
    hex: string;
    rgb: ColorRGB;
    hsv: ColorHSV;
    hsl: ColorHSL;
}
export interface ColorRGB {
    r: number;
    g: number;
    b: number;
}
export interface ColorHSV {
    h: number;
    s: number;
    v: number;
}
export interface ColorHSL {
    h: number;
    s: number;
    l: number;
}
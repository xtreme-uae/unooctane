export type litegold = {
    name: 'litegold',
    color: 'rgba(244, 226, 163, 1)'
}
export type gold = {
    name: 'gold',
    color: 'rgba(216, 190, 136, 1)'
}

export type brown = {
    name: 'brown',
    color: 'rgba(178, 142, 102, 1)'
}

export type purple = {
    name: 'purple',
    color: 'rgba(122, 86, 142, 1)'
}

export interface Dark {
    background: '#1B2430';
    foreground: '#252d3a';
    textColor: '#d3d3d3';
}
export interface Light {
    background: '#f8f5ff';
    foreground: '#fffffd';
    textColor: '#3a3541de';
}

export type ThemeMode = Dark | Light;
type ColorPallets = litegold | gold | purple | brown;
export type PrimaryColorName = ColorPallets["name"]
export type PrimaryColorCode = ColorPallets['color']
export type PrimaryColor = {
    name: PrimaryColorName;
    color: PrimaryColorCode;
}
export const colorPallets: Array<PrimaryColor> = [
    { name: 'litegold', color: "rgba(244, 226, 163, 1)" },
    { name: 'gold', color: "rgba(216, 190, 136, 1)" },
    { name: 'brown', color: "rgba(178, 142, 102, 1)" },
    { name: 'purple', color: "rgba(122, 86, 142, 1)" },
];
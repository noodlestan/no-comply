import { ColorSpaceName } from '../primitives/primitives';

export type HueValue = {
    getValue(): number;
};

export type SaturationValue = {
    getValue(): number;
};

export type LightnessValue = {
    getValue(): number;
};

export type AlphaValue = {
    getValue(): number;
};

export type ColorValue = {
    getColorString(space: ColorSpaceName): string;
};

export type ColorInput =
    | string
    | number
    | { h: number; s: number; l: number }
    | { h: number; s: number; v: number };

export type ColorSpaceName = 'rgb' | 'hsl' | 'hsv';

export type SpaceInput = number | string | { value: number; units: 'px' | 'em' | 'rem' };

export type SignedSpaceInput = number | string | { value: number; units: 'px' | 'em' | 'rem' };

export type PercentageInput = number;

export type SignedPercentageInput = number;

export type DegreesInput = number;

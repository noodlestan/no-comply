import type { AxisShorthandProp, ResponsiveProp } from '@no-comply/solid-primitives';

export type LayoutGapProps = {
    gap?: AxisShorthandProp<ResponsiveProp<string>>;
    rowGap?: ResponsiveProp<string>;
    columnGap?: ResponsiveProp<string>;
};

import {
    type AxisShorthandProp,
    type ClassList,
    type ResponsiveProp,
} from '@no-comply/solid-primitives';

import type { LayoutGapProps } from '../../types';

export type GridMixinFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';
export type GridMixinAlign =
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

export type GridMixinProps = LayoutGapProps & {
    columns?: ResponsiveProp<string | number>;
    rows?: ResponsiveProp<string | number>;
    areas?: ResponsiveProp<string>;
    gap?: ResponsiveProp<AxisShorthandProp<string>>;
    rowGap?: ResponsiveProp<string>;
    columnGap?: ResponsiveProp<string>;
    flow?: ResponsiveProp<GridMixinFlow>;
    justifyItems?: ResponsiveProp<GridMixinAlign>;
    alignItems?: ResponsiveProp<GridMixinAlign>;
    justifyContent?: ResponsiveProp<GridMixinAlign>;
    alignContent?: ResponsiveProp<GridMixinAlign>;
    autoRows?: ResponsiveProp<string | number>;
    autoColumns?: ResponsiveProp<string | number>;
    inline?: boolean;
};

export type GridMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

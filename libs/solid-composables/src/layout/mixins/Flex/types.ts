import { type ClassList, type ResponsiveProp, type Styles } from '@no-comply/solid-primitives';

import type { FlexAlign, FlexDirection, FlexJustify, LayoutGapProps } from '../../types';

export type FlexMixinProps = LayoutGapProps & {
    direction?: ResponsiveProp<FlexDirection>;
    align?: ResponsiveProp<FlexAlign>;
    justify?: ResponsiveProp<FlexJustify>;

    // shrink?: ResponsiveProp<boolean | number>;
    shrink?: ResponsiveProp<boolean>;
    wrap?: ResponsiveProp<boolean>;
    flex?: ResponsiveProp<number>;
    inline?: ResponsiveProp<boolean>;
};

export type FlexMixinAPI = {
    $root: {
        classList: ClassList;
        style: Styles;
    };
};

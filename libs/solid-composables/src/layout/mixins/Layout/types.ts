import { type ClassList, type ResponsiveProp } from '@no-comply/solid-primitives';

import type { LayoutOverflow, LayoutPaddingProps, LayoutStretch } from '../../types';

export type LayoutMixinProps = LayoutPaddingProps & {
    stretch?: ResponsiveProp<LayoutStretch>;
    uncontained?: ResponsiveProp<boolean>;
    overflow?: ResponsiveProp<LayoutOverflow>;
};

export type LayoutMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

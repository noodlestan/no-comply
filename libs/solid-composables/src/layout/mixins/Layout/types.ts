import { type ClassList, type ResponsiveProp } from '@no-comply/solid-primitives';

import type { LayoutPaddingProps, LayoutStretch, Layoutverflow } from '../../types';

export type LayoutMixinProps = LayoutPaddingProps & {
    stretch?: ResponsiveProp<LayoutStretch>;
    uncontained?: ResponsiveProp<boolean>;
    overflow?: ResponsiveProp<Layoutverflow>;
};

export type LayoutMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

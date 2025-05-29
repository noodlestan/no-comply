import { type ClassList, type ResponsiveProp } from '@no-comply/solid-primitives';

export type LayoutMixinProps = {
    padding?: ResponsiveProp<string>;
    stretch?: LayoutMixinStretch;
    uncontained?: boolean;
    overflow?: LayoutMixinOverflow;
};

export type LayoutMixinStretch = 'width' | 'height' | 'full';
export type LayoutMixinOverflow = 'auto' | 'x-auto' | 'y-auto' | 'hidden';

export type LayoutMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

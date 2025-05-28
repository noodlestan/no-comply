import { type ClassList } from '@noodlestan/context-ui-primitives';

export type LayoutMixinProps = {
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

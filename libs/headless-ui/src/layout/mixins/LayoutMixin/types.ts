import type { LayoutTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';

export type LayoutMixinProps = {
    component?: LayoutTagName;
    stretch?: LayoutMixinStretch;
    overflow?: LayoutMixinOverflow;
};

export type LayoutMixinStretch = 'width' | 'height' | 'full';
export type LayoutMixinOverflow = 'auto' | 'x-auto' | 'y-auto' | 'hidden';

export type LayoutMixinAPI = {
    elProps: {
        component: LayoutTagName;
        classList: ClassList;
    };
};

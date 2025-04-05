import type { LayoutTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-types';

export type LayoutMixinProps = {
    component?: LayoutTagName;
    stretch?: LayoutMixinStretch;
    overflow?: LayoutMixinOverflow;
};

export type LayoutMixinStretch = 'width' | 'height' | 'full';
export type LayoutMixinOverflow = 'auto' | 'x-auto' | 'y-auto' | 'hidden';

export type LayoutMixinElementProps = {
    component: LayoutTagName;
    classList: ClassList;
};

export type LayoutMixinAPI = {
    elProps: LayoutMixinElementProps;
};

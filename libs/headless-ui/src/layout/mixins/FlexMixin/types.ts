import type { ClassList } from '@noodlestan/context-ui-types';

export type FlexMixinProps = {
    direction?: FlexMixinDirection;
    align?: FlexMixinAlign;
    justify?: FlexMixinJustify;
    shrink?: boolean | number;
    inline?: boolean;
    wrap?: boolean;
    flex?: number;
};

export type FlexMixinDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexMixinAlign = 'start' | 'center' | 'baseline' | 'end' | 'stretch';
export type FlexMixinJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';

export type FlexMixinElementProps = {
    classList: ClassList;
};

export type FlexMixinAPI = {
    elProps: FlexMixinElementProps;
};

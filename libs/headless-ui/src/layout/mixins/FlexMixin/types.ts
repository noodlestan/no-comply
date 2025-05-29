import { type ClassList, type ResponsiveProp } from '@noodlestan/context-ui-primitives';

export type FlexMixinProps = {
    direction?: FlexMixinDirection;
    align?: FlexMixinAlign;
    justify?: FlexMixinJustify;
    gap?: ResponsiveProp<string>;
    shrink?: boolean | number;
    inline?: boolean;
    wrap?: boolean;
    flex?: number;
};

export type FlexMixinDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexMixinAlign = 'start' | 'center' | 'baseline' | 'end' | 'stretch';
export type FlexMixinJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';

export type FlexMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

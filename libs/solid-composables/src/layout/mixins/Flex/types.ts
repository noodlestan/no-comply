import { type ClassList, type ResponsiveProp, type Styles } from '@no-comply/solid-primitives';

export type FlexMixinProps = {
    direction?: FlexMixinDirection;
    align?: FlexMixinAlign;
    justify?: FlexMixinJustify;
    gap?: ResponsiveProp<string>;
    shrink?: boolean | number;
    wrap?: boolean;
    flex?: number;
    inline?: boolean;
};

export type FlexMixinDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexMixinAlign = 'start' | 'center' | 'baseline' | 'end' | 'stretch';
export type FlexMixinJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';

export type FlexMixinAPI = {
    $root: {
        classList: ClassList;
        style: Styles;
    };
};

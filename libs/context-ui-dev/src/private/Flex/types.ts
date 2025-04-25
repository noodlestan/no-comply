import type { LayoutTagName } from '@noodlestan/context-ui-aria';
import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FlexMixinProps, LayoutMixinProps, TagProps } from '@noodlestan/headless-ui';

export type FlexProps = Omit<TagProps, 'component'> &
    LayoutMixinProps &
    FlexMixinProps & {
        padding?: LayoutPadding;
        component?: LayoutTagName;
        gap?: FlexGap;
    };

export type FlexGap = 'none' | 's' | 'm' | 'l';
export type LayoutPadding = 'none' | 's' | 'm' | 'l';

export type FlexAPI = {
    elProps: Omit<TagProps, 'component'> & {
        component: LayoutTagName;
        classList: ClassList;
    };
};

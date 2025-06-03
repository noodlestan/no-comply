import {
    type LayoutMixinAPI as HeadlessLayoutMixinAPI,
    type LayoutMixinProps as HeadlessLayoutMixinProps,
    type LayoutPaddingProps,
} from '@no-comply/solid-composables';
import type { AxisShorthandProp, ClassList, ResponsiveProp } from '@no-comply/solid-primitives';

export type LayoutMixinProps = Omit<HeadlessLayoutMixinProps, keyof LayoutPaddingProps> &
    LayoutPaddingProps<LayoutPadding>;

export type LayoutPadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type LayoutPaddingShorthand = AxisShorthandProp<ResponsiveProp<LayoutPadding>>;

export type LayoutMixinAPI = {
    $root: HeadlessLayoutMixinAPI['$root'] & {
        classList: ClassList;
    };
};

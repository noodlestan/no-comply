import {
    type LayoutMixinAPI as HeadlessLayoutMixinAPI,
    type LayoutMixinProps as HeadlessLayoutMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList, ResponsiveProp } from '@no-comply/solid-primitives';

export type LayoutMixinProps = Omit<HeadlessLayoutMixinProps, 'padding'> & {
    padding?: ResponsiveProp<LayoutPadding>;
};

export type LayoutPadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type LayoutMixinAPI = {
    $root: HeadlessLayoutMixinAPI['$root'] & {
        classList: ClassList;
    };
};

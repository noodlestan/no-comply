import type { ClassList, ResponsiveProp } from '@noodlestan/context-ui-primitives';
import {
    type LayoutMixinAPI as HeadlessLayoutMixinAPI,
    type LayoutMixinProps as HeadlessLayoutMixinProps,
} from '@noodlestan/headless-ui';

export type LayoutMixinProps = Omit<HeadlessLayoutMixinProps, 'padding'> & {
    padding?: ResponsiveProp<LayoutPadding>;
};

export type LayoutPadding = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type LayoutMixinAPI = {
    $root: HeadlessLayoutMixinAPI['$root'] & {
        classList: ClassList;
    };
};

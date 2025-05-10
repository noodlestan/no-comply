import type { ClassList } from '@noodlestan/context-ui-primitives';
import {
    type FlexMixinAPI as HeadlessFlexMixinAPI,
    type FlexMixinProps as HeadlessFlexMixinProps,
} from '@noodlestan/headless-ui';

export type FlexMixinProps = HeadlessFlexMixinProps & {
    gap?: FlexGap;
};

export type FlexGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export type FlexMixinAPI = {
    $root: HeadlessFlexMixinAPI['$root'] & {
        classList: ClassList;
    };
};

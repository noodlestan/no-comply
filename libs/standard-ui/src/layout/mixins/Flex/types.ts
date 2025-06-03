import {
    type FlexMixinAPI as HeadlessFlexMixinAPI,
    type FlexMixinProps as HeadlessFlexMixinProps,
    type LayoutGapProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

export type FlexMixinProps = Omit<HeadlessFlexMixinProps, keyof LayoutGapProps> &
    LayoutGapProps<FlexGap>;

export type FlexGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export type FlexMixinAPI = {
    $root: HeadlessFlexMixinAPI['$root'] & {
        classList: ClassList;
    };
};

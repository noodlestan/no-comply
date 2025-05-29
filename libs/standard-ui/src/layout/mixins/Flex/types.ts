import type { ClassList, ResponsiveProp } from '@noodlestan/context-ui-primitives';
import {
    type FlexMixinAPI as HeadlessFlexMixinAPI,
    type FlexMixinProps as HeadlessFlexMixinProps,
} from '@noodlestan/headless-ui';

import type { GlobalBreakpointName } from '../../../theme';

export type FlexMixinProps = Omit<HeadlessFlexMixinProps, 'gap'> & {
    gap?: ResponsiveProp<FlexGap, GlobalBreakpointName>;
};

export type FlexGap = 'none' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export type FlexMixinAPI = {
    $root: HeadlessFlexMixinAPI['$root'] & {
        classList: ClassList;
    };
};

import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FocusRingMixinAPI as HeadlessFocusRingMixinAPI } from '@noodlestan/headless-ui';

import type { FocusRingOffsetMixinAPI, FocusRingOffsetMixinProps } from '../FocusRingOffset';

export type FocusRingMixinProps = FocusRingOffsetMixinProps;

export type FocusRingMixinAPI = {
    $root: HeadlessFocusRingMixinAPI['$root'] &
        FocusRingOffsetMixinAPI['$root'] & {
            classList: ClassList;
        };
};

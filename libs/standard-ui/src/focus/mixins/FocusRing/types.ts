import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { FocusRingOffsetMixinAPI, FocusRingOffsetMixinProps } from '../FocusRingOffset';

export type FocusRingMixinProps = FocusRingOffsetMixinProps;

export type FocusRingMixinAPI = {
    $root: FocusRingOffsetMixinAPI['$root'] & {
        classList: ClassList;
    };
};

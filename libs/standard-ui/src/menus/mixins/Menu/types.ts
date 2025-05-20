import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { FocusRingMixinAPI } from '../../../focus';

export type MenuMixinProps = {};

export type MenuMixinAPI = {
    $root: FocusRingMixinAPI['$root'] & {
        classList: ClassList;
    };
};

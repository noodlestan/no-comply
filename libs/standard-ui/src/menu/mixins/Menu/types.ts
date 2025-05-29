import type { ClassList } from '@no-comply/solid-primitives';

import type { FocusRingMixinAPI } from '../../../focus';

export type MenuMixinProps = object;

export type MenuMixinAPI = {
    $root: FocusRingMixinAPI['$root'] & {
        classList: ClassList;
    };
};

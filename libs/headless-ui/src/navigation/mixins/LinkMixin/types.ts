import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { FocusRingMixinAPI } from '../../../focus';

export interface LinkMixinAPI {
    $root: FocusRingMixinAPI['$root'] & {
        classList: ClassList;
    };
}

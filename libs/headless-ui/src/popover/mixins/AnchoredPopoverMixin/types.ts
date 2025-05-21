import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { PopoverMixinAPI } from '../PopoverMixin';

export type AnchoredPopoverMixinAPI = {
    $root: PopoverMixinAPI['$root'] & {
        classList: ClassList;
    };
};

import type { ClassList } from '@noodlestan/context-ui-primitives';
import { type LinkMixinAPI as HeadlessLinkMixinAPI } from '@noodlestan/headless-ui';

import type { FocusRingMixinAPI, FocusRingOffsetMixinAPI } from '../../../focus';

export type LinkMixinAPI = {
    $root: HeadlessLinkMixinAPI['$root'] &
        FocusRingMixinAPI['$root'] &
        FocusRingOffsetMixinAPI['$root'] & {
            classList: ClassList;
        };
};

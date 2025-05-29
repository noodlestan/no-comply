import { type LinkMixinAPI as HeadlessLinkMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

import type { FocusRingMixinAPI, FocusRingMixinProps } from '../../../focus';

export type LinkMixinProps = FocusRingMixinProps;

export type LinkMixinAPI = {
    $root: HeadlessLinkMixinAPI['$root'] &
        FocusRingMixinAPI['$root'] & {
            classList: ClassList;
        };
};

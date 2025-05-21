import type { ClassList } from '@noodlestan/context-ui-primitives';
import { type LinkMixinAPI as HeadlessLinkMixinAPI } from '@noodlestan/headless-ui';

import type { FocusRingMixinAPI, FocusRingMixinProps } from '../../../focus';

export type LinkMixinProps = FocusRingMixinProps;

export type LinkMixinAPI = {
    $root: HeadlessLinkMixinAPI['$root'] &
        FocusRingMixinAPI['$root'] & {
            classList: ClassList;
        };
};

import type { ClassList } from '@noodlestan/context-ui-primitives';
import { type LinkMixinAPI as HeadlessLinkMixinAPI } from '@noodlestan/headless-ui';

import type { FocusRingOffsetMixinAPI } from '../../../focus';
import type { ContentSize } from '../../../types';

export type NavLinkMixinProps = {
    size?: ContentSize;
    nowrap?: boolean;
};

export type NavLinkMixinAPI = {
    $root: HeadlessLinkMixinAPI['$root'] &
        FocusRingOffsetMixinAPI['$root'] & {
            classList: ClassList;
        };
};

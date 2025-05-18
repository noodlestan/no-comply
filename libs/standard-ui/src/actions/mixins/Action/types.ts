import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ActionMixinAPI as HeadlessActionMixinAPI } from '@noodlestan/headless-ui';

import type { FocusRingMixinAPI, FocusRingOffsetMixinAPI } from '../../../focus';
import type { ContentSize } from '../../../types';
import type { ActionIntent, ActionVariant } from '../../types';

export type ActionMixinProps = {
    variant?: ActionVariant;
    intent?: ActionIntent;
    size?: ContentSize;
};

export type ActionMixinAPI = {
    $root: HeadlessActionMixinAPI['$root'] &
        FocusRingMixinAPI['$root'] &
        FocusRingOffsetMixinAPI['$root'] & {
            classList: ClassList;
        };
};

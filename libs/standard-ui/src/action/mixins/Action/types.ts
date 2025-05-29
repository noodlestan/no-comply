import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ActionMixinAPI as HeadlessActionMixinAPI } from '@noodlestan/headless-ui';

import type { FocusRingMixinAPI, FocusRingMixinProps } from '../../../focus';
import type { ActionIntent, ActionVariant } from '../../types';

export type ActionMixinProps = FocusRingMixinProps & {
    variant?: ActionVariant;
    intent?: ActionIntent;
};

export type ActionMixinAPI = {
    $root: HeadlessActionMixinAPI['$root'] &
        FocusRingMixinAPI['$root'] & {
            classList: ClassList;
        };
};

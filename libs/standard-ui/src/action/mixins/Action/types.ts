import type { ActionMixinAPI as HeadlessActionMixinAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';

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

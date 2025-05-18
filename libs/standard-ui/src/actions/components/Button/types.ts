import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FocusRingAPI, PressableAPI, PressableProps } from '@noodlestan/headless-ui';

import type { ActionMixinAPI, ActionMixinProps } from '../../mixins';

export type ButtonProps = PressableProps & ActionMixinProps;

export type ButtonAPI = {
    $root: PressableAPI['$root'] &
        FocusRingAPI['$root'] &
        ActionMixinAPI['$root'] & {
            classList: ClassList;
        };
};

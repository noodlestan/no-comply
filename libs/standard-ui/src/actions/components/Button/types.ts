import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { FocusRingAPI, PressableAPI, PressableProps } from '@noodlestan/headless-ui';

import type { ButtonMixinAPI, ButtonMixinProps } from '../../mixins';

export type ButtonProps = PressableProps & ButtonMixinProps;

export type ButtonAPI = {
    $root: PressableAPI['$root'] &
        FocusRingAPI['$root'] &
        ButtonMixinAPI['$root'] & {
            classList: ClassList;
        };
};

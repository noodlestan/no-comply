import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ActionMixinAPI, ActionMixinProps } from '../Action';

export type ButtonMixinProps = ActionMixinProps;

export type ButtonMixinAPI = {
    $root: ActionMixinAPI['$root'] & {
        classList: ClassList;
    };
};

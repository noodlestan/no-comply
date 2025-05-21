import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ActionMixinAPI, ActionMixinProps } from '../Action';
import type { SizedActionMixinAPI, SizedActionMixinProps } from '../SizedAction';

export type ButtonMixinProps = ActionMixinProps & SizedActionMixinProps;

export type ButtonMixinAPI = {
    $root: ActionMixinAPI['$root'] &
        SizedActionMixinAPI['$root'] & {
            classList: ClassList;
        };
};

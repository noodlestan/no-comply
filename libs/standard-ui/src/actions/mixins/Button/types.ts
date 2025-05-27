import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ActionLabelMixinAPI, ActionLabelMixinProps } from '../../../typography';
import type { ActionMixinAPI, ActionMixinProps } from '../Action';
import type { SizedActionMixinAPI, SizedActionMixinProps } from '../SizedAction';

export type ButtonMixinProps = ActionMixinProps &
    Omit<SizedActionMixinProps, 'size'> &
    Omit<ActionLabelMixinProps, 'nowrap'>;

export type ButtonMixinAPI = {
    $root: ActionMixinAPI['$root'] &
        SizedActionMixinAPI['$root'] &
        ActionLabelMixinAPI['$root'] & {
            classList: ClassList;
        };
};

import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../types';
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
    size: Accessor<ContentSize>;
};

import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ActionMixinAPI, ActionMixinProps } from '../../../actions';

export type MenuItemMixinProps = Omit<ActionMixinProps, 'size'> & {
    active?: boolean;
};

export type MenuItemMixinAPI = {
    $root: ActionMixinAPI['$root'] & {
        classList: ClassList;
    };
};

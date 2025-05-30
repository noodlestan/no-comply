import { staticClassList } from '@no-comply/solid-primitives';

import styles from './MenuItemGroupMixin.module.scss';
import type { MenuItemGroupMixinAPI } from './types';

export const createMenuItemGroupMixin = (): MenuItemGroupMixinAPI => {
    const $root = {
        classList: staticClassList(styles, 'MenuItemGroup'),
    };

    const $label = {
        classList: staticClassList(styles, '-Label'),
    };

    const $description = {
        classList: staticClassList(styles, '-Description'),
    };

    return {
        $root,
        $label,
        $description,
    };
};

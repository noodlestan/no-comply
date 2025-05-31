import type { Accessor } from 'solid-js';

export type MenuItemType = 'action' | 'sub-menu';

export type MenuItemAPI = {
    hasIcon: Accessor<boolean>;
    isSubMenu: Accessor<boolean>;
};

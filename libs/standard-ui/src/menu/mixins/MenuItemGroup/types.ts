import type { ClassList } from '@noodlestan/context-ui-primitives';

export type MenuItemGroupMixinProps = object;

export type MenuItemGroupMixinAPI = {
    $root: {
        classList: ClassList;
    };
    $label: {
        classList: ClassList;
    };
    $description: {
        classList: ClassList;
    };
};

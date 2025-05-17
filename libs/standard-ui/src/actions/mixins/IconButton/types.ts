import type { ClassList } from '@noodlestan/context-ui-primitives';

export type IconButtonMixinProps = {
    round?: boolean;
};

export type IconButtonMixinAPI = {
    $root: {
        classList: ClassList;
    };
    $icon: {
        classList: ClassList;
    };
};

import type { ClassList } from '@noodlestan/context-ui-primitives';

export type FocusRingOffsetMixinProps = {
    inset?: boolean;
};

export type FocusRingOffsetMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

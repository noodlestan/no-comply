import type { ClassList } from '@noodlestan/context-ui-primitives';

export type TextMixinProps = {
    nowrap?: boolean;
};

export type TextMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

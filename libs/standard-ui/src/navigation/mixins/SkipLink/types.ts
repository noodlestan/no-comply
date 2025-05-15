import type { ClassList } from '@noodlestan/context-ui-primitives';

export type SkipLinkMixinProps = {
    floating?: boolean;
};

export type SkipLinkMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

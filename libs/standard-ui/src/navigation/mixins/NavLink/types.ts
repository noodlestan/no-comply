import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ContentSize } from '../../../types';

export type NavLinkMixinProps = {
    size?: ContentSize;
};

export type NavLinkMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

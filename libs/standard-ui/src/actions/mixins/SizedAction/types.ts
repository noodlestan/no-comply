import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ContentSize } from '../../../types';

export type SizedActionMixinProps = {
    size?: ContentSize;
};

export type SizedActionMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

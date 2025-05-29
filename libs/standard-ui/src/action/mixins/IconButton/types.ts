import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { ContentSize } from '../../../types';

export type IconButtonMixinProps = {
    size: ContentSize;
    round?: boolean;
};

export type IconButtonMixinAPI = {
    $root: {
        classList: ClassList;
    };
    iconProps: {
        classList: ClassList;
        size: ContentSize;
    };
};

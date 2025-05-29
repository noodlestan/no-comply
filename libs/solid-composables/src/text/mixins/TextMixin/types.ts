import type { ClassList } from '@no-comply/solid-primitives';

import type { AlignToFirstLineMixinProps } from '../AlignToFirstLineMixin';

export type TextMixinProps = AlignToFirstLineMixinProps & {
    nowrap?: boolean;
};

export type TextMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

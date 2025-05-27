import type { ClassList } from '@noodlestan/context-ui-primitives';

import type { AlignToFirstLineMixinProps } from '../AlignToFirstLineMixin';

export type TextMixinProps = AlignToFirstLineMixinProps & {
    nowrap?: boolean;
};

export type TextMixinAPI = {
    $root: {
        classList: ClassList;
    };
};

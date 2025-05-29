import type {
    AlignToFirstLineMixinAPI,
    AlignToFirstLineMixinProps,
} from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ContentSize } from '../../../types';

export type SizedActionMixinProps = AlignToFirstLineMixinProps & {
    size?: ContentSize;
};

export type SizedActionMixinAPI = {
    $root: AlignToFirstLineMixinAPI['$root'] & {
        classList: ClassList;
    };
    size: Accessor<ContentSize>;
};

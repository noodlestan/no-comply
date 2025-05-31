import type { ClassList } from '@no-comply/solid-primitives';

import type { AlignedToFirstLineMixinAPI, AlignedToFirstLineMixinProps } from '../../../typography';

export type IconMixinProps = AlignedToFirstLineMixinProps;

export type IconMixinAPI = {
    $root: AlignedToFirstLineMixinAPI['$root'] & {
        classList: ClassList;
    };
};

import type { ClassList } from '@no-comply/solid-primitives';

import type { AlignToFirstLineMixinAPI, AlignToFirstLineMixinProps } from '../../../text';

export type IconMixinProps = AlignToFirstLineMixinProps;

export type IconMixinAPI = {
    $root: AlignToFirstLineMixinAPI['$root'] & {
        classList: ClassList;
    };
};

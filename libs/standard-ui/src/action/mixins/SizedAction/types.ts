import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { AlignToFirstLineMixinAPI, AlignToFirstLineMixinProps } from '@noodlestan/headless-ui';
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

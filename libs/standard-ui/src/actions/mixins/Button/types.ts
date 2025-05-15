import type { ClassList } from '@noodlestan/context-ui-primitives';
import type { ButtonMixinAPI as HeadlessButtonMixinAPI } from '@noodlestan/headless-ui';

import type { FocusRingOffsetMixinAPI } from '../../../focus';
import type { ContentSize } from '../../../types';
import type { ActionVariant } from '../../types';

export type ButtonMixinProps = {
    variant?: ActionVariant;
    size?: ContentSize;
};

export type ButtonMixinAPI = {
    $root: HeadlessButtonMixinAPI['$root'] &
        FocusRingOffsetMixinAPI['$root'] & {
            classList: ClassList;
        };
};

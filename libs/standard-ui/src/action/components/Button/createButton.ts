import { createFocusRing, createPressable } from '@no-comply/solid-composables';
import { mergeProps } from '@no-comply/solid-primitives';

import { createButtonMixin } from '../../mixins';

import type { ButtonAPI, ButtonProps } from './types';

export const createButton = (props: ButtonProps): ButtonAPI => {
    const { $root: $pressableRoot } = createPressable(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $buttonMixinRoot, size } = createButtonMixin(props);

    return {
        $root: mergeProps($pressableRoot, $focusRingRoot, $buttonMixinRoot),
        size,
    };
};

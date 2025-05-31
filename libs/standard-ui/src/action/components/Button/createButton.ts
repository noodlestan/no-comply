import { createFocusRing, createPressable } from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createButtonMixin } from '../../mixins';

import type { ButtonAPI, ButtonProps } from './types';

export const createButton = (props: ButtonProps): ButtonAPI => {
    const { $root: $pressableRoot } = createPressable(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $buttonMixinRoot, size } = createButtonMixin(props);

    return {
        $root: combineProps($pressableRoot, $focusRingRoot, $buttonMixinRoot),
        size,
    };
};

import { mergeProps } from '@noodlestan/context-ui-primitives';
import { createFocusRing, createButton as createHeadlessButton } from '@noodlestan/headless-ui';

import { createButtonMixin } from '../../mixins';

import type { ButtonAPI, ButtonProps } from './types';

export const createButton = (props: ButtonProps): ButtonAPI => {
    const { $root: $buttonRoot } = createHeadlessButton(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $buttonMixinRoot } = createButtonMixin(props);

    return {
        $root: mergeProps($buttonRoot, $focusRingRoot, $buttonMixinRoot),
    };
};

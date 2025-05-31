import { createFocusRing, createPressable } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createButtonMixin } from '../../mixins';

import { $BUTTON } from './constants';
import type { ButtonAPI, ButtonProps } from './types';

export const createButton = (props: ButtonProps): ButtonAPI => {
    const [locals, expose, compose] = createExposable($BUTTON, props);

    const { $root: $pressableRoot } = compose(createPressable(locals));
    const { $root: $focusRingRoot } = compose(createFocusRing());
    const { $root: $buttonMixinRoot, size } = compose(createButtonMixin(locals));

    return exposeAPI(expose, '$root', {
        $root: combineProps($pressableRoot, $focusRingRoot, $buttonMixinRoot),
        size,
    });
};

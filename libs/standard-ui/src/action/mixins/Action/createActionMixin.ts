import { createActionMixin as createHeadlessActionMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    createClassList,
    computedProps,
    mergeProps,
} from '@no-comply/solid-primitives';

import { createFocusRingMixin } from '../../../focus';

import styles from './ActionMixin.module.scss';
import type { ActionMixinAPI, ActionMixinProps } from './types';

const defaultProps: PickRequired<ActionMixinProps, 'variant' | 'intent'> = {
    variant: 'secondary',
    intent: 'neutral',
};

export const createActionMixin = (props: ActionMixinProps): ActionMixinAPI => {
    const { $root: $buttonMixinRoot } = createHeadlessActionMixin();
    const { $root: $focusRing } = createFocusRingMixin(props);

    const variant = () => props.variant ?? defaultProps.variant;
    const intent = () => props.intent ?? defaultProps.intent;
    const classList = createClassList(styles, () => [
        `Action`,
        `variant-${variant()}`,
        `intent-${intent()}`,
    ]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: mergeProps($buttonMixinRoot, $focusRing, $root),
    };
};

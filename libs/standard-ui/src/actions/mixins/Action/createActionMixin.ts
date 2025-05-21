import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createActionMixin as createHeadlessActionMixin } from '@noodlestan/headless-ui';

import { createFocusRingMixin } from '../../../focus';

import styles from './ActionMixin.module.scss';
import type { ActionMixinAPI, ActionMixinProps } from './types';

const defaultProps: PickRequired<ActionMixinProps, 'variant' | 'intent'> = {
    variant: 'secondary',
    intent: 'neutral',
};

export const createActionMixin = (props: ActionMixinProps): ActionMixinAPI => {
    const { $root: $buttonMixinRoot } = createHeadlessActionMixin();
    const { $root: $focusRing } = createFocusRingMixin();

    const variant = () => props.variant ?? defaultProps.variant;
    const intent = () => props.intent ?? defaultProps.intent;
    const classList = createClassList(styles, () => [
        `Action`,
        `variant-${variant()}`,
        `intent-${intent()}`,
    ]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($buttonMixinRoot, $focusRing, $localRoot),
    };
};

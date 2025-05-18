import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import {
    createActionMixin as createHeadlessActionMixin,
    createFocusRingMixin as createHeadlessFocusRingMixin,
} from '@noodlestan/headless-ui';

import { createFocusRingOffsetMixin } from '../../../focus';

import styles from './ActionMixin.module.scss';
import type { ActionMixinAPI, ActionMixinProps } from './types';

const defaultProps: PickRequired<ActionMixinProps, 'variant' | 'intent' | 'size'> = {
    variant: 'secondary',
    intent: 'neutral',
    size: 'normal',
};

export const createActionMixin = (props: ActionMixinProps): ActionMixinAPI => {
    const { $root: $buttonMixinRoot } = createHeadlessActionMixin();
    const { $root: $focusRing } = createHeadlessFocusRingMixin();
    const { $root: $focusRingOffset } = createFocusRingOffsetMixin();

    const variant = () => props.variant ?? defaultProps.variant;
    const intent = () => props.intent ?? defaultProps.intent;
    const size = () => props.size ?? defaultProps.size;
    const classList = createClassList(styles, () => [
        `Action`,
        `variant-${variant()}`,
        `intent-${intent()}`,
        `size-${size()}`,
    ]);
    const $localRoot = createComputedProps({ classList });

    return {
        $root: mergeProps($buttonMixinRoot, $focusRing, $focusRingOffset, $localRoot),
    };
};

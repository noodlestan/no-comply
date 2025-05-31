import { createTextMixin as createHeadlessTextMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    createClassList,
    computedProps,
    mergeProps,
} from '@no-comply/solid-primitives';

import styles from './ActionLabelMixin.module.scss';
import type { ActionLabelMixinAPI, ActionLabelMixinProps } from './types';

const defaultProps: PickRequired<ActionLabelMixinProps, 'variant'> = {
    variant: 'normal',
};

export const createActionLabelMixin = (props: ActionLabelMixinProps): ActionLabelMixinAPI => {
    const { $root: $textMixinRoot } = createHeadlessTextMixin(props);

    const variant = () => props.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => ['ActionLabel', `variant-${variant()}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: mergeProps($textMixinRoot, $root),
    };
};

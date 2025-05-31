import { createTextMixin as createHeadlessTextMixin } from '@no-comply/solid-composables';
import {
    type PickRequired,
    createClassList,
    computedProps,
    mergeProps,
} from '@no-comply/solid-primitives';

import styles from './LabelMixin.module.scss';
import type { LabelMixinAPI, LabelMixinProps } from './types';

const defaultProps: PickRequired<LabelMixinProps, 'variant'> = {
    variant: 'normal',
};

export const createLabelMixin = (props: LabelMixinProps): LabelMixinAPI => {
    const { $root: $textMixinRoot } = createHeadlessTextMixin(props);

    const variant = () => props.variant ?? defaultProps.variant;
    const classList = createClassList(styles, () => ['Label', `variant-${variant()}`]);
    const $root = computedProps({
        classList,
    });

    return {
        $root: mergeProps($textMixinRoot, $root),
    };
};
